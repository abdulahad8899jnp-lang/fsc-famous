// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "XXX",
//   authDomain: "fsc-portfolio.firebaseapp.com",
//   projectId: "fsc-portfolio",
//   storageBucket: "fsc-portfolio.appspot.com",
//   messagingSenderId: "215109695269",
//   appId: "XXX",
// };

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);







import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCe7g6OrehPzUYoKhXEU7QHweWmuZ5A25o",
  authDomain: "fsc-portfolio.firebaseapp.com",
  projectId: "fsc-portfolio",
  storageBucket: "fsc-portfolio.firebasestorage.app",
  messagingSenderId: "215109695269",
  appId: "1:215109695269:web:f393fd278f248d0ea80ccc",
  measurementId: "G-E5DK0K5ZE1"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);