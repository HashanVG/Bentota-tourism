import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, Timestamp } from "firebase/firestore";

// Load .env variables locally without exposing them in git
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, "../.env");

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  envContent.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const match = trimmed.match(/^([^=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      let val = match[2].trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      process.env[key] = val;
    }
  });
}

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
  measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID,
};

if (!firebaseConfig.apiKey) {
  console.error("Error: Missing VITE_FIREBASE_API_KEY in .env file.");
  process.exit(1);
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const INITIAL_REVIEWS = [
  {
    name: 'Dani Sara',
    location: 'Italy',
    rating: 5,
    text: "We met Sam ( Samantha ) randomly and are so glad about that! He's the friendliest and fairest Guide we could met at Sri Lanka. We made two great trips with him - a Daytrip to Sigiriya Rock and a Two-days-Trip to Yala National Park and Ella. Sam offered us really fair prices and showed himself as a non intrusive, informative, fair and absolutely friendly human being! I would recommend Sam to anyone who wants to do excursions in Sri Lanka and if I should ever visit Sri Lanka again, Sam will be my first contact of choice",
    source: 'initial',
    createdAt: Timestamp.fromDate(new Date(Date.now() - 4 * 24 * 60 * 60 * 1000)),
  },
  {
    name: 'Caroline Bennett',
    location: 'United Kingdom',
    rating: 5,
    text: "I was only with Sam for a couple of days travelling from Bentota up to the Dambulla area and back but would highly recommend him.  He speaks excellent English, is very knowledgeable about the country, the wildlife, the culture etc.  And most important of all is an excellent driver - I felt very safe in on roads which actutally seem very dangerous with crazy bus drivers and hundreds of tuk-tuks. Would certainly contact him again if I want to do a tour in the future.  Thank you Sam!",
    source: 'initial',
    createdAt: Timestamp.fromDate(new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)),
  },
  {
    name: 'Laura G',
    location: 'Australia',
    rating: 5,
    text: 'During our Sri Lanka holiday in Bentota (November 2025) we had the opportunity to meet Samantha. Since our stay was relatively short we decided to book with Samantha a 2-day tour to the mountains with an overnight stay. It was 2 days of fun and we learned a lot about the country and the people. Samantha speaks good German and of course English. He likes to respond to individual wishes and has been able to tell us a lot about ethnic groups , religions and the history of the country. He has always been punctual and reliable. We can highly recommend him with a clear conscience as an organizer and tour guide.  Thank you Sam!',
    source: 'initial',
    createdAt: Timestamp.fromDate(new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)),
  },
  {
    name: 'Mary Kennedy',
    location: 'United Kingdom',
    rating: 5,
    text: "Sam was entertaining, informative and knowledgeable. We felt in safe hands under his guidance. We had a brilliant day at Yala, all of which was facilitated by Sam. Huge thanks to you Sam, from Mary & Nigel",
    source: 'initial',
    createdAt: Timestamp.fromDate(new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)),
  },
];

async function seed() {
  console.log("Connecting to Firebase Firestore...");
  const reviewsCol = collection(db, "reviews");
  const existing = await getDocs(reviewsCol);

  if (existing.size > 0) {
    console.log(`Firestore 'reviews' collection already has ${existing.size} documents. Skipping duplicate seed.`);
    process.exit(0);
  }

  console.log("Seeding 4 initial reviews into Firestore...");
  for (const review of INITIAL_REVIEWS) {
    const docRef = await addDoc(reviewsCol, review);
    console.log(`Added review for: ${review.name} (ID: ${docRef.id})`);
  }

  console.log("Initial reviews successfully added to Firebase!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Failed to seed reviews:", err);
  process.exit(1);
});
