import React from 'react';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/login';
import SignUp from './Pages/Login/SignUp'
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
          <Route path="/" element={<Login />} />
          <Route path='/signup' element={<SignUp/>}/>
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