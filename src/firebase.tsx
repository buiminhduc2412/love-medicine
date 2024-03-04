// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdJp2jmB60txsMOxa0M4_QmDL0ZjdW_Xk",
  authDomain: "medicine-4c8c3.firebaseapp.com",
  projectId: "medicine-4c8c3",
  storageBucket: "medicine-4c8c3.appspot.com",
  messagingSenderId: "644248505769",
  appId: "1:644248505769:web:77d4e3defcbbe906c608b8",
  measurementId: "G-K9FHLW338K"
};

// Initialize Firebase
const app : FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = initializeAuth(app)