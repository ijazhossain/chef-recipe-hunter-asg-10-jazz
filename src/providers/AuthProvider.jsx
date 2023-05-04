import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

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
    const authInfo = {
        user,
        createUser,
        signInUser,
        loading,
        logOut,
        resetPassword
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