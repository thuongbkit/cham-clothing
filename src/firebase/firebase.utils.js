import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDlPgwRLxltkzMXCo_7ThXqSVEl3zomSM4",
    authDomain: "cham-db.firebaseapp.com",
    databaseURL: "https://cham-db.firebaseio.com",
    projectId: "cham-db",
    storageBucket: "",
    messagingSenderId: "562824294427",
    appId: "1:562824294427:web:d6a2a90635fed937"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;