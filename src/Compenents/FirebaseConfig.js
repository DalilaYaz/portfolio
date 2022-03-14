import Firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAyXtdswSbck3a1vqKzGnVLU2aT1xsJdds",
  authDomain: "portfolio-221a7.firebaseapp.com",
  databaseURL: "https://portfolio-221a7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-221a7",
  storageBucket: "portfolio-221a7.appspot.com",
  messagingSenderId: "318416568998",
  appId: "1:318416568998:web:1a46894640408268a5aa67"
};

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);

export default Firebase;