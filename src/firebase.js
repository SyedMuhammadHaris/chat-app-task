// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut} from "firebase/auth";

import {getFirestore, collection,addDoc} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAaMg3zAy5U-CQRCIBLbsASvRgITE3BGjU",
  authDomain: "chat-app-e16f0.firebaseapp.com",
  projectId: "chat-app-e16f0",
  storageBucket: "chat-app-e16f0.appspot.com",
  messagingSenderId: "50255436199",
  appId: "1:50255436199:web:ca7409c646acdd7dbcfe82",
  measurementId: "G-V3KLSNJFVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const googleProvider = new GoogleAuthProvider();

// const signInWithGoogle = async () => {
//   try {
//     const res = await signInWithPopup(auth, googleProvider);
//     const user = res.user;
//     const q = query(collection(db, "users"), where("uid", "==", user.uid));
//     const docs = await getDocs(q);
//     if (docs.docs.length === 0) {
//       await addDoc(collection(db, "users"), {
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: "google",
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// const sendPasswordReset = async (email) => {
//   try {
//     await sendPasswordResetEmail(auth, email);
//     alert("Password reset link sent!");
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
//   signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
//   sendPasswordReset,
  logout,
};