// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  authDomain: "winchester-webapp.firebaseapp.com",
  databaseURL: "https://winchester-webapp-default-rtdb.firebaseio.com",
  projectId: "winchester-webapp",
  storageBucket: "winchester-webapp.firebasestorage.app",
  messagingSenderId: "620800607108",
  appId: "1:620800607108:web:2fd4dc867b08fa3b8f53d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
