// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBG30eR6T0BGKqZysFUBgMtZbj-rk4s9FI",
    authDomain: "whatsapp-clone-75aea.firebaseapp.com",
    projectId: "whatsapp-clone-75aea",
    storageBucket: "whatsapp-clone-75aea.appspot.com",
    messagingSenderId: "355950174123",
    appId: "1:355950174123:web:23c03cf54fdb43e5e8bcee",
    measurementId: "G-XK61T5HZP1"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;