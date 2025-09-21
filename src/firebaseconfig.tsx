// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDC1xKTGtvE01KrIj25NiTfDBMC9ThBH0Q",
  authDomain: "halloween2024-94895.firebaseapp.com",
  databaseURL: "https://halloween2024-94895-default-rtdb.firebaseio.com",
  projectId: "halloween2024-94895",
  storageBucket: "halloween2024-94895.firebasestorage.app",
  messagingSenderId: "985750065791",
  appId: "1:985750065791:web:1e2b285ff4b44aa5b8e54a",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default app;
