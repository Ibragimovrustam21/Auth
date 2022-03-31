// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCQdkJoYA_4-ePAA7l9_ivkb2b_47mK41A",
  authDomain: "create-question-3bf59.firebaseapp.com",
  databaseURL: "https://create-question-3bf59-default-rtdb.firebaseio.com",
  projectId: "create-question-3bf59",
  storageBucket: "create-question-3bf59.appspot.com",
  messagingSenderId: "1020985969487",
  appId: "1:1020985969487:web:1f16c16c4815b54211933a",
  measurementId: "G-X15K5LHGD7"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);