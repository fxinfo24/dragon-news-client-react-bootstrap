// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwfZpMdw-3QEN6oYiyvjKO5G1wC7lijdM",
  authDomain: "the-dragon-news-1aac6.firebaseapp.com",
  projectId: "the-dragon-news-1aac6",
  storageBucket: "the-dragon-news-1aac6.appspot.com",
  messagingSenderId: "697695803648",
  appId: "1:697695803648:web:f32f759076c5be9b07fbe5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;