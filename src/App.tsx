import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TeacherView } from './pages/TeacherView';
import { DisplayView } from './pages/DisplayView';
import BrandWebsite from './pages/BrandWebsite';
import LoginPage from './pages/LoginPage';

interface ProtectedRouteProps {
  element: React.ReactElement;
  isAuthenticated: boolean;
}

function ProtectedRoute({ element, isAuthenticated }: ProtectedRouteProps) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return element;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if user was previously authenticated
    return localStorage.getItem('classroom_auth') === 'true';
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('classroom_auth');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    // Store auth state in localStorage when it changes
    if (isAuthenticated) {
      localStorage.setItem('classroom_auth', 'true');
    }
  }, [isAuthenticated]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BrandWebsite />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route
          path="/teacher"
          element={
            <ProtectedRoute
              element={<TeacherView onLogout={handleLogout} />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/display"
          element={
            <ProtectedRoute
              element={<DisplayView />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
