import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Impact from './Pages/Impact/Impact';
import LeaderBoard from './Pages/LeaderBoard/LeaderBoard';
import Tasks from './Pages/Tasks/Tasks';
import { AuthProvider, useAuth } from './context/AuthContext';
const ProtectedRoute = ({ isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to="/" replace />;
};
const AppNavigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Home />
            <Impact/>
            <LeaderBoard/>
            <Tasks/>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
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