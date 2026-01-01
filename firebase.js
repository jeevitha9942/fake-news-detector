import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBscEAd72QHjGhHrTSP4AL_Vp91iOO4y3I",
  authDomain: "fakenewsdetector-816ec.firebaseapp.com",
  projectId: "fakenewsdetector-816ec",
  storageBucket: "fakenewsdetector-816ec.firebasestorage.app",
  messagingSenderId: "635370624448",
  appId: "1:635370624448:web:8baa8f0193a47a78aaa425"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

window.auth = auth;
window.provider = provider;
