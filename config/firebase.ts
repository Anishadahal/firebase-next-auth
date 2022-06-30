// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCze48uY39Hu-PF5-tTpNcHih9ZePvRhG8",
	authDomain: "fir-next-auth-1ca62.firebaseapp.com",
	projectId: "fir-next-auth-1ca62",
	storageBucket: "fir-next-auth-1ca62.appspot.com",
	messagingSenderId: "111418148170",
	appId: "1:111418148170:web:458954cba2b2bbcbbd2db3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
