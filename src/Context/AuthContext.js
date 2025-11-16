// src/context/AuthContext.js
import { createContext, useContext, useState } from 'react';
import { clearLocalStorage } from '../Components/Auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Restore user from localStorage (if present)
    const savedUser = localStorage.getItem('data');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    clearLocalStorage();
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
