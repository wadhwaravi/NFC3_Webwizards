// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABK2dzvcPygLh5RAc9MuqtYGzLG-ZunzA",
  authDomain: "webwizards-2704c.firebaseapp.com",
  projectId: "webwizards-2704c",
  storageBucket: "webwizards-2704c.appspot.com",
  messagingSenderId: "420681355848",
  appId: "1:420681355848:web:b3f590f45c615dfb223e7d",
  measurementId: "G-T69FLRGHTY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
