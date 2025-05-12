import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage for auth token on app initialization
    const token = localStorage.getItem('authToken');
    const user = localStorage.getItem('user');
    
    if (token && user) {
      setCurrentUser(JSON.parse(user));
      setIsLoggedIn(true);
    }
    
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // In a real app, you would validate credentials with a backend API
    return new Promise((resolve, reject) => {
      // Simulate API call with timeout
      setTimeout(() => {
        // For demo - pretend any login works
        const mockUser = {
          id: 109,
          name: "Bryant Martinez",
          email: email,
          profilePicture: "/images/bryant.jpg",
          rating: 5.0,
          joinDate: "May 2023",
          bio: "Outdoor enthusiast and tech lover",
          location: "Fullerton, CA",
        };
        
        // Store auth info in localStorage
        localStorage.setItem('authToken', 'mock-jwt-token');
        localStorage.setItem('user', JSON.stringify(mockUser));
        
        setCurrentUser(mockUser);
        setIsLoggedIn(true);
        toast.success("Login successful");
        resolve(mockUser);
      }, 800);
    });
  };

  const signup = (name, email, password) => {
    // In a real app, you would register with a backend API
    return new Promise((resolve, reject) => {
      // Simulate API call with timeout
      setTimeout(() => {
        const mockUser = {
          id: Math.floor(Math.random() * 1000) + 200,
          name: name,
          email: email,
          profilePicture: "/api/placeholder/150/150",
          rating: 0,
          joinDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
          bio: "",
          location: "",
        };
        
        localStorage.setItem('authToken', 'mock-jwt-token');
        localStorage.setItem('user', JSON.stringify(mockUser));
        
        setCurrentUser(mockUser);
        setIsLoggedIn(true);
        toast.success("Account created successfully");
        resolve(mockUser);
      }, 800);
    });
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setCurrentUser(null);
    setIsLoggedIn(false);
    toast.info("Logged out successfully");
  };

  const value = {
    currentUser,
    isLoggedIn,
    login,
    signup,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};