import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js"
 
  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAn2qvpJWxvhX5odYL_V4BpbTbhuLoe0Wk",
    authDomain: "hackkare-login.firebaseapp.com",
    projectId: "hackkare-login",
    storageBucket: "hackkare-login.appspot.com",
    messagingSenderId: "871908313949",
    appId: "1:871908313949:web:3abe5a609a0f1e172d36b4"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const email = document.getElementById('emailtextbox').value;
const password = document.getElementById('passwordtextbox').value;
const hospitalname = document.getElementById('hospitalnametextbox').value;
const hospitaladdress = document.getElementById('hospitaladresstextbox').value;
const signupbutton = document.getElementById('signupbtn');
signupbutton.addEventListener("click",function(event){
    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
   alert("creating Account")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   alert("errorMessage')
    // ..
  });
})
