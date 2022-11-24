// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP8lW9L7WvEXLGQLk26uWSCFtl0tDqAh0",
  authDomain: "resellerbd-b4e3e.firebaseapp.com",
  projectId: "resellerbd-b4e3e",
  storageBucket: "resellerbd-b4e3e.appspot.com",
  messagingSenderId: "499720770846",
  appId: "1:499720770846:web:2fcc3cf8b4a3e28a47650f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app