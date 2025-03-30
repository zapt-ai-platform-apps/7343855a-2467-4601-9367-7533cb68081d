import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import EmailGenerator from '@/modules/emails/pages/Generator';
import TemplateLibrary from '@/modules/templates/pages/Library';
import Analytics from '@/modules/analytics/pages/Analytics';
import Settings from '@/modules/settings/pages/Settings';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/app" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="create" element={<EmailGenerator />} />
        <Route path="templates" element={<TemplateLibrary />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}