import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext';
import { auth } from '../firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, } from 'firebase/auth';



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };


    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }


    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authData = {
        auth,
        user,
        setUser,
        error,
        setError,
        createUser,
        signOutUser,
        updateUser,
        loading,
        setLoading
    }


    return <AuthContext value={authData}>
        {children}
    </AuthContext>
}

export default AuthProvider