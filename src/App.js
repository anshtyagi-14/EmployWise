import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import UserList from './pages/UserList';
import EditUser from './pages/EditUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </Router>
  );
}

export default App;