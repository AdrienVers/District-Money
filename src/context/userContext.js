import { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase-config';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from 'firebase/auth';

export const UserContext = createContext();

export function UserContextProvider(props) {
    const signUp = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);

    const signIn = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const [currentUser, setCurrentUser] = useState();
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser);
            setLoadingData(false);
        });

        return unsubscribe;
    }, []);

    return (
        <UserContext.Provider value={{ signUp, signIn, currentUser }}>
            {!loadingData && props.children}
        </UserContext.Provider>
    );
}
