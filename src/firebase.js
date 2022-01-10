import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBafnJt9Fru7zPu_ftsdpoosjSmkzWOxZU",
    authDomain: "zolitude-chat.firebaseapp.com",
    projectId: "zolitude-chat",
    storageBucket: "zolitude-chat.appspot.com",
    messagingSenderId: "163145675219",
    appId: "1:163145675219:web:0e300a8c5685f44c32ff26"
  }).auth();