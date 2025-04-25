import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const singOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const sigInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      setLoading(true)
        .then((result) => {
          console.log("Google loing Done");
        })
        .catch((error) => {
          console.error("Google sign-in error:", error.message);
        });
    
  }



  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("sate cacher", currentUser);
      setLoading(false);
    });
    return () => {
      unsubscibe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    singOutUser,
    sigInWithGoogle
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
