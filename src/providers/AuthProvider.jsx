import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    /* Create user Email Password */
    const createUser = (email, password) => {
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
    const authInfo = {
        user,
        createUser,
        signInUser,
        loading,
        logOut,
        resetPassword,
        googleSignIn,
        githubSignIn
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;