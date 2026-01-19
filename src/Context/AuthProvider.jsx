import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext';
import { auth } from '../firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth';
import useAxios from '../Hooks/useAxios';



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const axiosInstance = useAxios()
    const googleProvider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

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
            if (currentUser) {
                const loggedUser = { email: currentUser.email }
                axiosInstance.post('/getToken', loggedUser)
                    .then(res => {
                        localStorage.setItem('token', res.data.token)
                    })
            }
            else {
                localStorage.removeItem('token')
            }
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [axiosInstance])

    const authData = {
        auth,
        user,
        setUser,
        signIn,
        signInWithGoogle,
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