import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCpb7u-k-YAAiXbwf6bIoa6lXi3plFWFKo",
    authDomain: "fir-shoes-ecommerce.firebaseapp.com",
    projectId: "fir-shoes-ecommerce",
    storageBucket: "fir-shoes-ecommerce.appspot.com",
    messagingSenderId: "971325133036",
    appId: "1:971325133036:web:6e530965b7a2b9db74d5c9",
    measurementId: "G-KDY9BTC475"
})
export default firebaseConfig;