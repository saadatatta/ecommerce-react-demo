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

export const createUserProfileObject = async (userAuth, otherData) => {
  if (!userAuth) return;
  const { displayName, email, uid } = userAuth;

  const userQueryRef = fireStore.doc(`/users/${uid}`);
  const userSnapshot = await userQueryRef.get();
  if (!userSnapshot.exists) {
    try {
      await userQueryRef.set({
        displayName,
        email,
        createdAt: new Date(),
        ...otherData,
      });
    } catch (error) {
      console.log("Error creating user on firestore", error.message);
    }
  }
  return userQueryRef;
};

export const addCollectionAndDocuments = async (collectionKey, documents) => {
  const collectionRef = fireStore.collection(collectionKey);
  const batch = fireStore.batch();
  documents.forEach((doc) => {
    const newDocument = collectionRef.doc();
    batch.set(newDocument, doc);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      routeUrl: encodeURI(title.toLowerCase()),
      title,
      items,
    };
  });
  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export default firebase;
