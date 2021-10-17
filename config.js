import firebase from "firebase";

 const firebaseConfig = {
  apiKey: "AIzaSyAVcaHsZX-J4qnp_K2RhryNMBWpDgVABXs",
  authDomain: "school-attendance-app-aa5bf.firebaseapp.com",
  databaseURL: "https://school-attendance-app-aa5bf-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-aa5bf",
  storageBucket: "school-attendance-app-aa5bf.appspot.com",
  messagingSenderId: "953753985352",
  appId: "1:953753985352:web:e66fe080126c8555ff137d"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();

