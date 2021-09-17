import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDnO2LwSeb4CM-elx1i54p1RWnzAj4hyp4",
  authDomain: "twitter-clone-b8d6f.firebaseapp.com",
  projectId: "twitter-clone-b8d6f",
  storageBucket: "twitter-clone-b8d6f.appspot.com",
  messagingSenderId: "914544211337",
  appId: "1:914544211337:web:81ddc9cdd76d5611085d58",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db ;