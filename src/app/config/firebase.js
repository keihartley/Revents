import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCqemwmR2NYg5Z54RwShfe2jFdpMLg7x48",
  authDomain: "revents-284509.firebaseapp.com",
  databaseURL: "https://revents-284509.firebaseio.com",
  projectId: "revents-284509",
  storageBucket: "revents-284509.appspot.com",
  messagingSenderId: "770718682384",
  appId: "1:770718682384:web:0ce216d414aed05c516995",
  measurementId: "G-P74G23VHQP",
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;