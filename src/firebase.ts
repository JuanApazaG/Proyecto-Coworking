// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ4_0v1PgB9_PijXxR_xdpqNkPoZpmWs4",
  authDomain: "coworking-312a8.firebaseapp.com",
  projectId: "coworking-312a8",
  storageBucket: "coworking-312a8.firebasestorage.app",
  messagingSenderId: "992360181967",
  appId: "1:992360181967:web:7d818c7e277705b9d307ba",
  measurementId: "G-WLB8R6DN57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }; 