import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, Timestamp } from "firebase/firestore";

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

export const TRIPADVISOR_REVIEWS = [
  {
    name: "Doris B",
    location: "Munich, Germany",
    rating: 5,
    source: "tripadvisor",
    text: "Samantha isn't just the world's best driver (I didn't feel uncomfortable for a single second)—he's also a very charming companion. He took us to amazing places, always accommodated our requests, and was always in a good mood. Unfortunately our holiday had to come to an end, but we will cherish the memories and will certainly contact Sam when we return!",
    createdAt: Timestamp.fromDate(new Date("2026-09-28T10:00:00Z")),
  },
  {
    name: "Dani Sara",
    location: "Italy",
    rating: 5,
    source: "initial",
    text: "We met Sam ( Samantha ) randomly and are so glad about that! He's the friendliest and fairest Guide we could met at Sri Lanka. We made two great trips with him - a Daytrip to Sigiriya Rock and a Two-days-Trip to Yala National Park and Ella. Sam offered us really fair prices and showed himself as a non intrusive, informative, fair and absolutely friendly human being! I would recommend Sam to anyone who wants to do excursions in Sri Lanka and if I should ever visit Sri Lanka again, Sam will be my first contact of choice",
    createdAt: Timestamp.fromDate(new Date("2026-09-27T08:14:09Z")),
  },
  {
    name: "Jaison F",
    location: "London, United Kingdom",
    rating: 5,
    source: "tripadvisor",
    text: "Samantha was a great support throughout our visit to Bentota. We stayed at Cinnamon Bentota, and he efficiently arranged our transportation to Colombo as well as trips to various inland destinations. His local knowledge, experience, and helpful attitude made everything smooth and easy. Thank you Sam!",
    createdAt: Timestamp.fromDate(new Date("2026-09-04T12:00:00Z")),
  },
  {
    name: "Caroline Bennett",
    location: "United Kingdom",
    rating: 5,
    source: "initial",
    text: "I was only with Sam for a couple of days travelling from Bentota up to the Dambulla area and back but would highly recommend him. He speaks excellent English, is very knowledgeable about the country, the wildlife, the culture etc. And most important of all is an excellent driver - I felt very safe on roads which actually seem very dangerous with crazy bus drivers and hundreds of tuk-tuks. Would certainly contact him again if I want to do a tour in the future. Thank you Sam!",
    createdAt: Timestamp.fromDate(new Date("2026-08-20T09:30:00Z")),
  },
  {
    name: "zoe",
    location: "Mainz, Germany",
    rating: 5,
    source: "tripadvisor",
    text: "We traveled as a family for 11 days with Sam in Sri Lanka and can only recommend him! Even the planning from home was uncomplicated via WhatsApp. Everything worked out great. Sam welcomed us warmly right at the airport, guided us safely to all our destinations, and made our trip truly unforgettable.",
    createdAt: Timestamp.fromDate(new Date("2026-07-16T14:20:00Z")),
  },
  {
    name: "Rob Deavin",
    location: "United Kingdom",
    rating: 5,
    source: "tripadvisor",
    text: "Samantha is a great guide and a lovely guy. I am so glad I went birding with him for most of my 10 day stay. He made my birding holiday so enjoyable and packed full of great birds. Sam's knowledge and experience of birds in Sri Lanka got me to see 26 endemic species.",
    createdAt: Timestamp.fromDate(new Date("2026-06-21T11:15:00Z")),
  },
  {
    name: "Laura G",
    location: "Australia",
    rating: 5,
    source: "initial",
    text: "During our Sri Lanka holiday in Bentota we had the opportunity to meet Samantha. Since our stay was relatively short we decided to book with Samantha a 2-day tour to the mountains with an overnight stay. It was 2 days of fun and we learned a lot about the country and the people. Samantha speaks good German and of course English. He likes to respond to individual wishes and has been able to tell us a lot about ethnic groups, religions and the history of the country. He has always been punctual and reliable. We can highly recommend him with a clear conscience as an organizer and tour guide. Thank you Sam!",
    createdAt: Timestamp.fromDate(new Date("2026-05-10T10:00:00Z")),
  },
  {
    name: "Amelie B",
    location: "Berlin, Germany",
    rating: 5,
    source: "tripadvisor",
    text: "We made a round trip over 6 nights with Sam and were more than thrilled. Of course, what is advantageous is its new, air-conditioned car, which also fits well several suitcases. For the round trip: We started at the airport, we first went to Dambula, where we visited the cave temple, Sigiriya rock, Kandy, Nuwara Eliya, Ella, and Yala safari. Sam always drove very safely, showed us secret spots, and took great care of us throughout. Highly recommended!",
    createdAt: Timestamp.fromDate(new Date("2026-03-18T16:45:00Z")),
  },
  {
    name: "MarcelErwin",
    location: "Hamburg, Germany",
    rating: 5,
    source: "tripadvisor",
    text: "We have been to Srilanka for the fourth time in February 2026 and have already taken some tours with Sam. This time Sigirya and Danbulla with elephant safari. The tour was perfectly organized by Sam and he had little surprises in store again this time, which made the trip absolutely wonderful.",
    createdAt: Timestamp.fromDate(new Date("2026-03-08T15:00:00Z")),
  },
  {
    name: "Mary Kennedy",
    location: "United Kingdom",
    rating: 5,
    source: "initial",
    text: "Sam was entertaining, informative and knowledgeable. We felt in safe hands under his guidance. We had a brilliant day at Yala, all of which was facilitated by Sam. Huge thanks to you Sam, from Mary & Nigel",
    createdAt: Timestamp.fromDate(new Date("2026-02-14T08:14:09Z")),
  },
];

async function seed() {
  console.log("Connecting to Firebase Firestore...");
  const reviewsCol = collection(db, "reviews");
  const existing = await getDocs(reviewsCol);

  console.log(`Cleaning up ${existing.size} existing documents to refresh with TripAdvisor 5-star reviews...`);
  for (const document of existing.docs) {
    await deleteDoc(doc(db, "reviews", document.id));
  }

  console.log("Adding 6 TripAdvisor 5-star reviews into Firestore...");
  for (const review of TRIPADVISOR_REVIEWS) {
    const docRef = await addDoc(reviewsCol, review);
    console.log(`Added review for: ${review.name} (ID: ${docRef.id})`);
  }

  console.log("All 6 reviews successfully saved to Firebase Firestore!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Failed to seed reviews:", err);
  process.exit(1);
});
