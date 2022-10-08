// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADBIM0777COAUaWRs0C-qkgKf4mQ74juw",
  authDomain: "halloween2022-d73d8.firebaseapp.com",
  projectId: "halloween2022-d73d8",
  storageBucket: "halloween2022-d73d8.appspot.com",
  messagingSenderId: "979864751048",
  appId: "1:979864751048:web:be34fc2d0f0230d1f08efd",
  databaseUrl: "https://halloween2022-d73d8-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;