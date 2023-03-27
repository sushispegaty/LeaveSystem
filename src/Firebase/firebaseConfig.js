import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQDeWQo3-1YgUVl6wrlcGdYhdXgIt2e78",
  authDomain: "customhook-3538f.firebaseapp.com",
  databaseURL: "https://customhook-3538f-default-rtdb.firebaseio.com",
  projectId: "customhook-3538f",
  storageBucket: "customhook-3538f.appspot.com",
  messagingSenderId: "282319460849",
  appId: "1:282319460849:web:f148a2a8b358aa0c8d4c50",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
