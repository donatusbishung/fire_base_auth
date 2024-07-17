import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaLAJgTGa4p6nvUrzLIXJ7mDE8W3eIb6g",
  authDomain: "userauthkh.firebaseapp.com",
  projectId: "userauthkh",
  storageBucket: "userauthkh.appspot.com",
  messagingSenderId: "436545604220",
  appId: "1:436545604220:web:6315faa5e70aabf0b917f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
