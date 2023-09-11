// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCW3KwoD5U14RFRnXoM819cx_0pf8n0BXo",
  authDomain: "halloween2023-e0136.firebaseapp.com",
  databaseURL: "https://halloween2023-e0136-default-rtdb.firebaseio.com",
  projectId: "halloween2023-e0136",
  storageBucket: "halloween2023-e0136.appspot.com",
  messagingSenderId: "130574249218",
  appId: "1:130574249218:web:8bf4eb3c1b3ac350eca61b"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default app;