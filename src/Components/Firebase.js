import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBTJom1BG0CM0LI_Od4VrtY0R2xpHxpqD4",
    authDomain: "grocery-shopping-website.firebaseapp.com",
    projectId: "grocery-shopping-website",
    storageBucket: "grocery-shopping-website.appspot.com",
    messagingSenderId: "1051822183210",
    appId: "1:1051822183210:web:fb58a3993ad851eda60453"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const productCollection = collection(db, 'products')

export { productCollection };

  
