//const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;以下是引入

  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
  import{ firebaseConfig } from './config.js';
  import { logout } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
  import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";




  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);


export const signup = async (email, password) =>{
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        return userCredential.user;
  
    } catch (error) {
        throw error;
    }
}

export const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
}

export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        throw error;
    }
}

export const monitorAuthState = (callback) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}
