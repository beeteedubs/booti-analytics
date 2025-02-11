import React from 'react';
import LoginForm from './components/LoginForm'; // Adjust the path if necessary
import Dashboard from './components/Dashboard'; // Adjust the path if necessary
import { Route, Routes } from 'react-router';
import './App.css';
import DashboardLayout from './components/DashboardLayout'
import StatsCard from './components/StatsCard'

function App() {
  return (
    <div>
      <Routes className="App">
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <DashboardLayout />
    </div>
  );
}

export default App;
