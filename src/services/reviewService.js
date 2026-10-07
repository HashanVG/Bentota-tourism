import { 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  limit, 
  serverTimestamp, 
  onSnapshot 
} from "firebase/firestore";
import { db } from "./firebase";

export const REVIEWS_COLLECTION = "reviews";

/**
 * Submit a new review to Firestore from the website.
 */
export async function submitReview({ name, location, rating, text }) {
  const reviewData = {
    name: name.trim(),
    location: location?.trim() || "Visitor",
    rating: Number(rating),
    text: text.trim(),
    source: "website",
    createdAt: serverTimestamp(),
  };

  const docRef = await addDoc(collection(db, REVIEWS_COLLECTION), reviewData);
  return { id: docRef.id, ...reviewData };
}

/**
 * Subscribe to real-time reviews from Firestore.
 * Always ordered from newest to oldest, up to 10 items.
 * If any review is deleted or added in Firebase, onSnapshot updates immediately.
 */
export function subscribeToLatestReviews(callback) {
  try {
    const q = query(
      collection(db, REVIEWS_COLLECTION),
      orderBy("createdAt", "desc")
    );

    return onSnapshot(
      q,
      (snapshot) => {
        const reviews = snapshot.docs.map((doc) => {
          const data = doc.data();
          let createdDate = new Date();
          if (data.createdAt?.toDate) {
            createdDate = data.createdAt.toDate();
          } else if (data.createdAt?.seconds) {
            createdDate = new Date(data.createdAt.seconds * 1000);
          }

          return {
            id: doc.id,
            name: data.name || "Anonymous",
            location: data.location || "Guest",
            rating: Number(data.rating) || 5,
            text: data.text || "",
            source: data.source || "website",
            tripType: data.tripType || "",
            visitedDate: data.visitedDate || "",
            writtenDate: data.writtenDate || "",
            createdAt: createdDate,
          };
        });

        // Strictly ordered from newest to oldest
        reviews.sort((a, b) => {
          const timeA = a.createdAt?.getTime ? a.createdAt.getTime() : 0;
          const timeB = b.createdAt?.getTime ? b.createdAt.getTime() : 0;
          return timeB - timeA;
        });

        callback(reviews);
      },
      (error) => {
        console.warn("Firestore reviews listener warning:", error);
        callback([]);
      }
    );
  } catch (err) {
    console.error("Error setting up reviews listener:", err);
    callback([]);
    return () => {};
  }
}

/**
 * Calculate average rating and total count across ALL reviews in the database.
 */
export function calculateAverageRating(reviews) {
  if (!reviews || reviews.length === 0) {
    return { average: 5.0, count: 0 };
  }
  const sum = reviews.reduce((acc, curr) => acc + (Number(curr.rating) || 0), 0);
  const average = Number((sum / reviews.length).toFixed(1));
  return { average, count: reviews.length };
}

// Keep alias for backward compatibility
export const calculateWebsiteAverage = calculateAverageRating;
