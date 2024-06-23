import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    GoogleAuthProvider,
    GithubAuthProvider,
    updateProfile,
    onAuthStateChanged
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";
  
  export const AuthContext = createContext(null);
  
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const updateUserProfile = (name,image) => {
      setLoading(false);
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: image
      })
    }
  
    const loginUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const logOut = () => {
      // setLoading(true);
      window.location.reload();
      return signOut(auth);
    };
  
  
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
  
    const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
    
    const githubLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, githubProvider);
    };
  
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
        console.log(currenUser, "currentUser");
        setUser(currenUser);
        setLoading(false);
      });
      return () => unSubscribe();
    },[]);
    
  
    const authInfo = { user, loading, createUser, loginUser, setUser,googleLogin, logOut, githubLogin,updateUserProfile };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;