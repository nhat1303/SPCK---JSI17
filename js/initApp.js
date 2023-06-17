// 


 
 //////////// 

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-lite.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK_2mNDVETMz94hV7oM03gD45hTp-_2fI",
  authDomain: "cart-74c61.firebaseapp.com",
  projectId: "cart-74c61",
  storageBucket: "cart-74c61.appspot.com",
  messagingSenderId: "78014149634",
  appId: "1:78014149634:web:c536f52b23d34c952fe31b",
  measurementId: "G-206G4TX696"
};

// Initialize Firebase

  export const firebaseApp = initializeApp(firebaseConfig);

 export const firebaseDatabase = getFirestore(firebaseApp)


 // Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
//  import { getFirestore} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-lite.js";
//  // TODO: Add SDKs for Firebase products that you want to use
//  // https://firebase.google.com/docs/web/setup#available-libraries

//  // Your web app's Firebase configuration
//  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//  const firebaseConfig = {
//    apiKey: "AIzaSyAzxgO1Ic7NaPlBNxYf82sL43Qi-EJsaKo",
//    authDomain: "signin-firebase-48dd9.firebaseapp.com",
//    databaseURL: "https://signin-firebase-48dd9-default-rtdb.asia-southeast1.firebasedatabase.app",
//    projectId: "signin-firebase-48dd9",
//    storageBucket: "signin-firebase-48dd9.appspot.com",
//    messagingSenderId: "438435219401",
//    appId: "1:438435219401:web:2d493bd8efdfee7be3ca18",
//    measurementId: "G-THYWGLPM92"
//  };

//  // Initialize Firebase
//  export const firebaseApp = initializeApp(firebaseConfig);

//  export const firebaseDatabase = getFirestore(firebaseApp)

