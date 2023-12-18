// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApax9m43KKRuJJLpvUUMgFFal6AijKGv4",
  authDomain: "the-react-cave.firebaseapp.com",
  projectId: "the-react-cave",
  storageBucket: "the-react-cave.appspot.com",
  messagingSenderId: "865399575559",
  appId: "1:865399575559:web:1804de0e8a5df879be86a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
