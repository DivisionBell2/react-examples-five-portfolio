import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjFinGpPlALXjeG1CAlwfy_XLDJ6E2ZMo",
  authDomain: "divisionbell-24f48.firebaseapp.com",
  projectId: "divisionbell-24f48",
  storageBucket: "divisionbell-24f48.appspot.com",
  messagingSenderId: "881777801781",
  appId: "1:881777801781:web:46b41f0a9c805252d3cf7c",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()