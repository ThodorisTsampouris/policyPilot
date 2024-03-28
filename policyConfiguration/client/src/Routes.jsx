// src/Routes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes as ReactRoutes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';

const Routes = () => {
  return (
    <Router>
      <ReactRoutes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/:project_id" element={<Project />} />
      </ReactRoutes>
    </Router>
  );
};

export default Routes;
