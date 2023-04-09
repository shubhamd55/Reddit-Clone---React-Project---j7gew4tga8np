// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkjcxoWbnW8wY1symi4ngC-obUOUjNsMc",
  authDomain: "reddit-clone-e6c41.firebaseapp.com",
  projectId: "reddit-clone-e6c41",
  storageBucket: "reddit-clone-e6c41.appspot.com",
  messagingSenderId: "218698779393",
  appId: "1:218698779393:web:c2bd3747a8ac7c9b2da900",
  measurementId: "G-705MVJCV0N",

  // databaseURL: "https://reddit-clone-e6c41.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export {app,storage};