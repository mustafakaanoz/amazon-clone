import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCfPovIPFZbwgf8RrmnnLvEzbFN7e779DU",
  authDomain: "clone-ae162.firebaseapp.com",
  projectId: "clone-ae162",
  storageBucket: "clone-ae162.appspot.com",
  messagingSenderId: "827775120341",
  appId: "1:827775120341:web:eeeb1ab02d226227c8035c",
  measurementId: "G-1S2EL9WWNB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };