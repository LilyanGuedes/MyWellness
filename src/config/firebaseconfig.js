import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDQg2Hg1Wu-d6faXTVQ54PQmBWC8Zb7vgY",
  authDomain: "mywellness-c1f95.firebaseapp.com",
  projectId: "mywellness-c1f95",
  storageBucket: "mywellness-c1f95.appspot.com",
  messagingSenderId: "668766959059",
  appId: "1:668766959059:web:7caeecddf5697236fceb26"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore()
export default database()
