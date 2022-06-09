import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,

    // apiKey: "AIzaSyDBA_mMquqwRD0Ko5GsDa0CnfHWAf7f8WA",
    // authDomain: "entertainment-app-6ad6b.firebaseapp.com",
    // projectId: "entertainment-app-6ad6b",
    // storageBucket: "entertainment-app-6ad6b.appspot.com",
    // messagingSenderId: "184865455399",
    // appId: "1:184865455399:web:7be782a162d4b711f87d02"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// const provider = new firebase.auth.GoogleAuthProvider();
// export { auth, provider };
export default app;
