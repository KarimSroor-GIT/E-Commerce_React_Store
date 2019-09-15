import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const  firebaseConfig = {
  apiKey: "AIzaSyCRgllmyWZ4FXnTojZKWvLakOd1h4XQyiw",
  authDomain: "rstore-11ee8.firebaseapp.com",
  databaseURL: "https://rstore-11ee8.firebaseio.com",
  projectId: "rstore-11ee8",
  storageBucket: "",
  messagingSenderId: "938798152236",
  appId: "1:938798152236:web:8ef9483e50a3ad99de6f89"
};

export const createUserProfileDocument = async (userAuth, additionalData) =>
{
  if (!userAuth) return ; // if userAuth object is null exit the function
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists)
  {
    console.log(userAuth);
    const {displayName,email} = userAuth;
    const createdAt = new Date();
    try {
       await userRef.set({displayName,email,createdAt,...additionalData});
    }
    catch(err){
      console.log ('error creating user', err.message);
    }
  }
  return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;
