import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import app from "../firebase/firebaseAuthConfig";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const auth = getAuth(app);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  });
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (name)=>{
    const profile = {
        displayName:name
    }
    return updateProfile(auth.currentUser,profile)
  }
  const signIn = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logOut = ()=>{
    return signOut(auth)
  }
    const authInfo = {
    user,
    createUser,
    updateUser,
    signIn,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
