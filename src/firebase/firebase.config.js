// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBseYGKUFO5ZwBUi54FmbcpD3V89s0Puzk",
  authDomain: "chef-recipe-client-side.firebaseapp.com",
  projectId: "chef-recipe-client-side",
  storageBucket: "chef-recipe-client-side.appspot.com",
  messagingSenderId: "699797293117",
  appId: "1:699797293117:web:3f347b82e8ab09c43fc254"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;