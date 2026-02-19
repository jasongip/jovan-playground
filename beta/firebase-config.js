// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDocs, collection, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAO618ARy3iAmArgumicd98nlX_us7UcVk",
  authDomain: "jovan-playground.firebaseapp.com",
  projectId: "jovan-playground",
  storageBucket: "jovan-playground.firebasestorage.app",
  messagingSenderId: "429658166931",
  appId: "1:429658166931:web:ee0c1c9a8568e4e13f5f66",
  measurementId: "G-P77WCV8DMP"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, doc, setDoc, getDocs, collection, query, orderBy, limit };
