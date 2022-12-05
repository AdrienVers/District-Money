import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase-config";
import {
  UserCredential,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

interface User {
  userid: string;
  email: string | null;
  displayName: string | null;
}

interface AuthContextValue {
  user: User | null;
  login: (email: string, password: string) => Promise<UserCredential>;
  signup: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
}

const defaultValue: AuthContextValue = {
  user: null,
  signup: async () => {
    throw new Error("Not authenticated");
  },
  login: async () => {
    throw new Error("Not authenticated");
  },
  logout: async () => {
    throw new Error("Not authenticated");
  },
};

const AuthContext = createContext<AuthContextValue>(defaultValue);

export const useAuth = () => useContext<AuthContextValue>(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  console.log(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          userid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
