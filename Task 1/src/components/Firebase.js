import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxrnHJ5B-KzxrOM1d7oLbfpgDvLwoOWB8",
  authDomain: "task-1-travels-creators.firebaseapp.com",
  projectId: "task-1-travels-creators",
  storageBucket: "task-1-travels-creators.appspot.com",
  messagingSenderId: "333853086830",
  appId: "1:333853086830:web:fb4e32c98a55671a00827f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); // inside of db we have access to our variables
const auth = firebase.auth(); // here we get authentication
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, storage, provider };
