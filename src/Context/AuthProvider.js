import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  signOut ,GoogleAuthProvider
  ,signInWithPopup
} from "firebase/auth";
import app from "../firebase/firebaseAuthConfig";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [advertise,setAdvertise] = useState([])
  const [user, setUser] = useState({});
  const [loading,setLoading] = useState(true)
  const auth = getAuth(app);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => unsubscribe();
  });
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (name,photo)=>{
    const profile = {
        displayName:name,
        photoURL:photo
    }
    setLoading(true)
    return updateProfile(auth.currentUser,profile)
  }
  const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logOut = ()=>{
    setLoading(true)
    localStorage.removeItem('accessToken')
    return signOut(auth)
  }
  const googleLogin = ()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }
    const authInfo = {
    user,
    googleLogin,
    createUser,
    updateUser,
    signIn,
    logOut,
    loading,
    advertise,
    setAdvertise
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
