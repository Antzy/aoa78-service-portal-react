import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../models/firebase';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        // For Deployment 1, we don't load profile yet (Deployment 2 will add this)
        setProfile(null);
      } else {
        setUser(null);
        setProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    return userCredential.user;
  };

  const register = async (email, password) => {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    return userCredential.user;
  };

  const logout = async () => {
    await auth.signOut();
  };

  const refreshProfile = async () => {
    // Placeholder - will be implemented in Deployment 2
    console.log('refreshProfile not yet implemented');
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, login, register, logout, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
}
