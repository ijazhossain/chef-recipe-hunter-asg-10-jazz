import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { ToastContainer } from 'react-toastify';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [reload, setReload] = useState(0)

    /* Create user Email Password */
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    /* user login */
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    /* Sign Out */
    const logOut = () => {
        return signOut(auth)
    }
    /* password reset */
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    /* google sign in */
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    /* github sign in */
    const githubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    /* facebook sign in */
    const facebookSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    const authInfo = {
        user,
        createUser,
        signInUser,
        loading,
        logOut,
        resetPassword,
        googleSignIn,
        githubSignIn,
        setReload,
        facebookSignIn,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [reload])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <ToastContainer></ToastContainer>
        </AuthContext.Provider>
    );
};

export default AuthProvider;