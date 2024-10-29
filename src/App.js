import React from 'react';
import LoginForm from './components/LoginForm'; // Adjust the path if necessary
import Dashboard from './components/Dashboard'; // Adjust the path if necessary
import { Route, Routes } from 'react-router';

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
