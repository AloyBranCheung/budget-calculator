// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWmF7ADIDe_VhOGPDDuAg67yH1KmzUUJo",
  authDomain: "budget-calculator-d3c11.firebaseapp.com",
  projectId: "budget-calculator-d3c11",
  storageBucket: "budget-calculator-d3c11.appspot.com",
  messagingSenderId: "998133802395",
  appId: "1:998133802395:web:9daf2f9f848711abf66d3e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
