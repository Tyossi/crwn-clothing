import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCVd1h1cKHxlvxyUl-u4vLYvwKis7K4yew",
    authDomain: "crwn-db-bc080.firebaseapp.com",
    projectId: "crwn-db-bc080",
    storageBucket: "crwn-db-bc080.appspot.com",
    messagingSenderId: "183752976555",
    appId: "1:183752976555:web:030525b3ac855f12b46fee",
    measurementId: "G-JC6QVPVWMD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;