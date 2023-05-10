import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

let db = false;

export const getDb = () => {
    if(!db){
      const firebaseConfig = {
        apiKey: "AIzaSyCZlpER9jJ0hfyBE6JhMtg3X1qrWZHT81E",
        authDomain: "los-quince-de-pili.firebaseapp.com",
        projectId: "los-quince-de-pili",
        storageBucket: "los-quince-de-pili.appspot.com",
        messagingSenderId: "367455802904",
        appId: "1:367455802904:web:8248781e115ecfdf22d56d",
        measurementId: "G-JRZ6XW2ZBL"
      };
      
        const app = initializeApp(firebaseConfig)

        db = getFirestore(app)
    }

    return db
}