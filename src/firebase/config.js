
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";




const firebaseConfig = {
  apiKey: "AIzaSyA8O86jINKTTes9XTKhCZL5Uf1MdqSjB7Q",
  authDomain: "secret-slambook.firebaseapp.com",
  databaseURL: "https://secret-slambook-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "secret-slambook",
  storageBucket: "secret-slambook.appspot.com",
  messagingSenderId: "647588414612",
  appId: "1:647588414612:web:515c55da3d45be3f4d6081",
  measurementId: "G-FMGZ3GSWVS"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app);

