/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useCookies } from "react-cookie";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// google auth provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // @ts-ignore
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // sign in with google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // sign-out user
  const logOut = () => {
    return signOut(auth);
  };

  //   observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // get and set token
      if (currentUser) {
        setLoading(false);
      } else {
        removeCookie("token", {
          path: "/",
        });
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [removeCookie]);

  const authInfo = {
    user,
    loading,
    googleSignIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
