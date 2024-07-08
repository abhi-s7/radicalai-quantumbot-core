// version 8
//import firebase from "firebase/app";

// version 9
import {initializeApp} from "firebase/app";
// in the firebase version 9 we are just importing the necessary function that is being used

const firebaseConfig = {
    apiKey: "AIzaSyAcqMECw-HOaUh5_b2D3QVPERtjQ8T1SCc",
    authDomain: "radicalx-abhi-dev.firebaseapp.com",
    projectId: "radicalx-abhi-dev",
    storageBucket: "radicalx-abhi-dev.appspot.com",
    messagingSenderId: "57481769760",
    appId: "1:57481769760:web:148e33a3675125ac5c9d45"
  };

// version 8
//firebase.initializeApp(firebaseConfig);

// version 9
initializeApp(firebaseConfig);