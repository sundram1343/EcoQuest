import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Impact from './Pages/Impact/Impact';
import LeaderBoard from './Pages/LeaderBoard/LeaderBoard';
import Tasks from './Pages/Tasks/Tasks';
import Navbar from './Components/NavBar/Navabr';
import Footer from './Components/Footer/Footer';
import { AuthProvider, useAuth } from './context/AuthContext';
const AppNavigation = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return (
      <>
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/impact" element={<Impact />} />
          </Routes>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="layout">
          <AppNavigation />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;