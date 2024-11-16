import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

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
const auth = getAuth();

const signinbutton = document.getElementById('loginbtn');
signinbutton.addEventListener('click', function(event) {
  event.preventDefault();
  const email = document.getElementById('signinemail').value;
  const password = document.getElementById('signinpass').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      window.location.href = "https://bhardwajchakri7.github.io/Course-Master/";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
