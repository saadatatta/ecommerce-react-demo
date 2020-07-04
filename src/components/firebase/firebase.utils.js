import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAtIxPPJgdPPm6Hg3inhRORu88aRN7Zg8U",
  authDomain: "ecommerce-demo-6263f.firebaseapp.com",
  databaseURL: "https://ecommerce-demo-6263f.firebaseio.com",
  projectId: "ecommerce-demo-6263f",
  storageBucket: "ecommerce-demo-6263f.appspot.com",
  messagingSenderId: "644461287651",
  appId: "1:644461287651:web:31c5513c66d33abe204dd6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
