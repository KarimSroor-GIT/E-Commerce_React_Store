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

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;
