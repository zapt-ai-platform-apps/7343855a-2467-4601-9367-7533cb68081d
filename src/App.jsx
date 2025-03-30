import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './app/routes';

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}