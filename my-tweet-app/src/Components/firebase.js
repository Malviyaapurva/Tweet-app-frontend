import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyCPQ1TUTLnpwFhB3FASolEWjXK-cSCWswc",
    authDomain: "tweet-app-4b4c9.firebaseapp.com",
    projectId: "tweet-app-4b4c9",
    storageBucket: "tweet-app-4b4c9.appspot.com",
    messagingSenderId: "342853492118",
    appId: "1:342853492118:web:197354ae4b1b19b02e51b7"
  });
  
  const auth=firebase.auth();
  const storage=firebase.storage();
  
  export {storage,auth};