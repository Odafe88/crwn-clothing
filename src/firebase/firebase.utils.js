import { initializeApp, FirebaseApp } from "firebase/app";

import { getFirestore, collection, addDoc, doc, getDoc, setDoc } from "firebase/firestore";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { async } from "@firebase/util";
import { useRef } from "react";


const config = {
    apiKey: "AIzaSyCJexZOr8nMWuBlHPPQHZ0pfibTg5E0ABQ",
    authDomain: "crwn-db-ce1e1.firebaseapp.com",
    projectId: "crwn-db-ce1e1",
    storageBucket: "crwn-db-ce1e1.appspot.com",
    messagingSenderId: "885309139125",
    appId: "1:885309139125:web:c1025c77197129f6fb76fc",
    measurementId: "G-NK44QKKV8Y"
  };


initializeApp(config);

export const createUserProfileData = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = doc(firestore, `user/${userAuth.uid}`);

  const snapShot = getDoc(userRef);
  
    if(!snapShot.exists)  {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
          setDoc(userRef, {
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        } catch (error) {
          console.error()
        }

      }

      return userRef;
    

  
  
}


export const auth = getAuth();

export const firestore = getFirestore();

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });

export const signInWithGoogle = () => signInWithPopup(auth, provider);



