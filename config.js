import firebase from 'firebase/app'
require ('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDtnC6myKfe6p0kC-Oo8DxYkcu5qGIx7CY",
    authDomain: "storyhub-bff57.firebaseapp.com",
    projectId: "storyhub-bff57",
    storageBucket: "storyhub-bff57.appspot.com",
    messagingSenderId: "823887051695",
    appId: "1:823887051695:web:4ed07c82bf51b91c544d5a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()