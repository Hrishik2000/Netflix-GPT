// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//Get AUTH is required everwhere in whole app hence put it here & exported form here
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUCs1fXo5VWH-nZGnDXiEq1VAYZxOBcco",
  authDomain: "netflixuigpt.firebaseapp.com",
  projectId: "netflixuigpt",
  storageBucket: "netflixuigpt.appspot.com",
  messagingSenderId: "96155765047",
  appId: "1:96155765047:web:767931789037748cd4b2b2",
  measurementId: "G-4XKRCFMZ6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();//export auth
