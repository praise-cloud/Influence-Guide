
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDOUromApVdIYr9a75-mUBz5xXOGgNUj9U",
  authDomain: "influencers-guide.firebaseapp.com",
  projectId: "influencers-guide",
  storageBucket: "influencers-guide.firebasestorage.app",
  messagingSenderId: "190636266927",
  appId: "1:190636266927:web:767de28a28ead906764b5a",
  measurementId: "G-JVTCPVX1X4"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);