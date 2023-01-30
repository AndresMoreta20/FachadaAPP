// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF7x4Olx_C03niBxLBvcBIGjpV7CDeIFs",
  authDomain: "peliculas-fachada.firebaseapp.com",
  projectId: "peliculas-fachada",
  storageBucket: "peliculas-fachada.appspot.com",
  messagingSenderId: "320704788385",
  appId: "1:320704788385:web:ef72d2c86884233fa6bde0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
export const db = getFirestore(app);