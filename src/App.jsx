import React from 'react';
import Home from './Pages/Home/Home';
import login from './Pages/Login/login';
import { AuthProvider, useAuth } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppNavigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<login />} />
        </Routes>
      )}
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppNavigation />
      </Router>
    </AuthProvider>
  );
}

export default App;