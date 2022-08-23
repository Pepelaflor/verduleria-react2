// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH0PkWhuuv26Cz9BFVHOAzpqg4gfyC1uk",
  authDomain: "e-commerce-verduleria.firebaseapp.com",
  projectId: "e-commerce-verduleria",
  storageBucket: "e-commerce-verduleria.appspot.com",
  messagingSenderId: "962129585853",
  appId: "1:962129585853:web:830ee7860d9fb1552b79d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db