import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface User {
  id: string;
  email: string;
  // Add other user properties here
}

interface Session {
  access_token: string;
  user: User;
  // Add other session properties
}

interface AuthContextType {
  session: Session | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<any>;
  register: (full_name: string, email: string, password: string) => Promise<any>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // On app load, check localStorage for an existing session
  useEffect(() => {
    setLoading(true);
    const savedSession = localStorage.getItem('supabaseSession');
    if (savedSession) {
      // ** NO CHANGE HERE, this was already correct **
      setSession(JSON.parse(savedSession));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json(); // data = { session: {...}, user: {...} }

      if (!response.ok) {
        throw new Error(data.error || 'Failed to login');
      }
      
      localStorage.setItem('supabaseSession', JSON.stringify(data.session));
      setSession(data.session);
      
      navigate('/my-learning');
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: (error as Error).message };
    } finally {
      setLoading(false);
    }
  };

  const register = async (full_name: string, email: string, password: string) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ full_name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to register');
      }

      // This will now work correctly
      return await login(email, password);
    } catch (error) {
      console.error('Register error:', error);
      return { success: false, error: (error as Error).message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('supabaseSession');
    setSession(null);
    navigate('/'); // Redirect to home on logout
  };

  return (
    <AuthContext.Provider value={{ session, loading, login, register, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};