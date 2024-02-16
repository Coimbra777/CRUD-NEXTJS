import firebase from "firebase/compat/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOm6zIhFSOJ83SS_ILEqEGfE84zXFKr8c",
  authDomain: "crudnext-f0491.firebaseapp.com",
  databaseURL: "https://crudnext-f0491-default-rtdb.firebaseio.com",
  projectId: "crudnext-f0491",
  storageBucket: "crudnext-f0491.appspot.com",
  messagingSenderId: "614573425565",
  appId: "1:614573425565:web:c6541d9f95bc389ccbe574",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
const database = firebase.database();

export { database, firebase };
