// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_PROJECTID,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_APPID,
};

// apiKey: "AIzaSyCOnjx8ALQnYNzngOGLQYvwPcUAm_M9uFQ",
//   authDomain: "a-11-62f53.firebaseapp.com",
//   projectId: "a-11-62f53",
//   storageBucket: "a-11-62f53.appspot.com",
//   messagingSenderId: "726307006024",
//   appId: "1:726307006024:web:af8015e57cea79eb8e1a7d"


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;



