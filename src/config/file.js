import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDAmNi_6RS8k2KIj-2oHr7rYwzMEwinqZ8",
    authDomain: "halicipos-84b65.firebaseapp.com",
    databaseURL: "https://halicipos-84b65.firebaseio.com",
    projectId: "halicipos-84b65",
    storageBucket: "halicipos-84b65.appspot.com",
    messagingSenderId: "1024962746770",
    appId: "1:1024962746770:web:e8597edc1c80e522a1094b"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
  