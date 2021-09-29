// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB4uIhFuE6pWYxCc40i54LSq5VgZpATLcg",
    authDomain: "facebook-next-f20d1.firebaseapp.com",
    projectId: "facebook-next-f20d1",
    storageBucket: "facebook-next-f20d1.appspot.com",
    messagingSenderId: "474030491817",
    appId: "1:474030491817:web:939f2970f38b078b1641b8",
    measurementId: "G-XG3QRTLWTV"
  };

  const app=!firebase.apps.length ? firebase.initializeApp(firebaseConfig) :firebase.app();

  const db=app.firestore();

  const storage=firebase.storage();

  export {db,storage}