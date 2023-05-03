// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3fgyavQy-OeForb80Ts8u9f1gWdl7BQA",
    authDomain: "chef-recipe-client-asg-10.firebaseapp.com",
    projectId: "chef-recipe-client-asg-10",
    storageBucket: "chef-recipe-client-asg-10.appspot.com",
    messagingSenderId: "848823875088",
    appId: "1:848823875088:web:e34bc9ba56ec9fd4bc3c95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;