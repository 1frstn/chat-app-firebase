// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmtUyBR81s5nqN_Zhu9C7VFAPRa8v94Wo",
  authDomain: "chat-7dc23.firebaseapp.com",
  projectId: "chat-7dc23",
  storageBucket: "chat-7dc23.appspot.com",
  messagingSenderId: "708327863089",
  appId: "1:708327863089:web:c46f0c45ed532792eb7610"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider  = new GoogleAuthProvider();

export const db = getFirestore(app); 