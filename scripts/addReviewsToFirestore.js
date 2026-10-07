import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, Timestamp } from "firebase/firestore";

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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const NEW_REVIEWS = [
  {
    name: "Doris B",
    location: "1 contribution",
    rating: 5,
    text: "Samantha isn't just the world's best driver (I didn't feel uncomfortable for a single second)—he's also a very charming companion. He took us to amazing places, always accommodated our requests, and was always in a good mood. Unfortunately our holiday had to come to an end, but we will cherish the memories and will certainly contact Sam when we return!",
    tripType: "Traveled with friends",
    visitedDate: "Visited September 2026",
    writtenDate: "Written September 28, 2026",
    source: "tripadvisor",
    createdAt: Timestamp.fromDate(new Date("2026-09-28T12:00:00Z")),
  },
  {
    name: "Jaison F",
    location: "3 contributions",
    rating: 5,
    text: "Samantha was a great support throughout our visit to Bentota. We stayed at Cinnamon Bentota, and he efficiently arranged our transportation to Colombo as well as trips to various inland destinations. His local knowledge, experience, and helpful nature made everything smooth and easy. Thank you Sam!",
    tripType: "Traveled with family",
    visitedDate: "Visited September 2026",
    writtenDate: "Written September 4, 2026",
    source: "tripadvisor",
    createdAt: Timestamp.fromDate(new Date("2026-09-04T12:00:00Z")),
  },
  {
    name: "zoe",
    location: "Mainz, Germany • 7 contributions",
    rating: 5,
    text: "We traveled as a family for 11 days with Sam in Sri Lanka and can only recommend him! Even the planning from home was uncomplicated via WhatsApp. Everything worked out great. Sam welcomed us warmly right at the airport, guided us safely to all our destinations, and made our trip truly unforgettable.",
    tripType: "Traveled with family",
    visitedDate: "Visited July 2026",
    writtenDate: "Written July 16, 2026",
    source: "tripadvisor",
    createdAt: Timestamp.fromDate(new Date("2026-07-16T12:00:00Z")),
  },
  {
    name: "Rob Deavin",
    location: "United Kingdom • 17 contributions",
    rating: 5,
    text: "Samantha is a great guide and a lovely guy. I am so glad I went birding with him for most of my 10 day stay. He made my birding holiday so enjoyable and packed full of great birds. Sam's knowledge and experience of birds in Sri Lanka got me to see 26 endemic species.",
    tripType: "Traveled solo",
    visitedDate: "Visited June 2026",
    writtenDate: "Written June 21, 2026",
    source: "tripadvisor",
    createdAt: Timestamp.fromDate(new Date("2026-06-21T12:00:00Z")),
  },
  {
    name: "Amelie B",
    location: "1 contribution",
    rating: 5,
    text: "We made a round trip over 6 nights with Sam and were more than thrilled. Of course, what is advantageous is its new, air-conditioned car, which also fits well several suitcases. For the round trip: We started at the airport, we first went to Dambula, where we visited the cave temple, Sigiriya rock, Kandy, Nuwara Eliya, Ella, and Yala safari. Sam always drove very safely, showed us secret spots, and took great care of us throughout. Highly recommended!",
    tripType: "Traveled with family",
    visitedDate: "Visited February 2026",
    writtenDate: "Written March 18, 2026",
    source: "tripadvisor",
    createdAt: Timestamp.fromDate(new Date("2026-03-18T12:00:00Z")),
  },
  {
    name: "MarcelErwin",
    location: "11 contributions",
    rating: 5,
    text: "We have been to Srilanka for the fourth time in February 2026 and have already taken some tours with Sam. This time Sigirya and Danbulla with elephant safari. The tour was perfectly organized by Sam and he had little surprises in store again this time, which made the trip absolutely wonderful.",
    tripType: "Traveled as a couple",
    visitedDate: "Visited February 2026",
    writtenDate: "Written March 8, 2026",
    source: "tripadvisor",
    createdAt: Timestamp.fromDate(new Date("2026-03-08T12:00:00Z")),
  },
];

async function addReviews() {
  console.log("Checking existing reviews in Firestore...");
  const reviewsCol = collection(db, "reviews");
  const existingSnap = await getDocs(reviewsCol);
  const existingNames = new Set();
  existingSnap.forEach((d) => {
    const data = d.data();
    if (data.name) existingNames.add(data.name.toLowerCase());
  });

  console.log(`Found ${existingSnap.size} reviews in Firestore.`);

  for (const review of NEW_REVIEWS) {
    if (existingNames.has(review.name.toLowerCase())) {
      console.log(`Review for ${review.name} already exists. Skipping.`);
      continue;
    }
    const docRef = await addDoc(reviewsCol, review);
    console.log(`Successfully added review for ${review.name} (ID: ${docRef.id})`);
  }

  console.log("Done adding reviews to Firestore!");
  process.exit(0);
}

addReviews().catch((err) => {
  console.error("Error adding reviews:", err);
  process.exit(1);
});
