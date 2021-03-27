import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDdFR9F7_gjKDPe8gr5lzJQFHzvM_nPjpw",
    authDomain: "mi-app-react-2021-03-21.firebaseapp.com",
    databaseURL: "https://mi-app-react-2021-03-21-default-rtdb.firebaseio.com",
    projectId: "mi-app-react-2021-03-21",
    storageBucket: "mi-app-react-2021-03-21.appspot.com",
    messagingSenderId: "553706984447",
    appId: "1:553706984447:web:71a19269c18f7ec18acdca",
    measurementId: "G-CVXMWQ5NRY"
};

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}

export const logOut = () => {
    auth.signOut().then(()=> {
      console.log('logged out')
    }).catch((error) => {
      console.log(error.message)
    })
  }
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const database = firebase.database();

export { firebase, googleAuthProvider, database as default };
//export default firebase.database();