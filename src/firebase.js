import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBABcsWncTpUgeOx6bHwRh-OqZUuByQlzc",
  authDomain: "clone-cd8f9.firebaseapp.com",
  projectId: "clone-cd8f9",
  storageBucket: "clone-cd8f9.appspot.com",
  messagingSenderId: "775969568235",
  appId: "1:775969568235:web:e8caca955b37f35c0e95ae",
  measurementId: "G-PP40V739W9",
});

const auth = firebase.auth();

export { auth };
