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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database();