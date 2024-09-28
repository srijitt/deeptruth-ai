import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const url = 'https://deeptruth-ai-backend.onrender.com/api/users';

  const login = async (accessToken) => {
    localStorage.setItem('token', accessToken);
    setIsAuthenticated(true);
    fetchUserData();
    navigate('/');
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
    navigate('/');
  };

  const fetchUserData = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      const response = await fetch(`${url}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setUser(data);
        setIsAuthenticated(true);
      } else {
        console.error(data);
      }
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, url }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};