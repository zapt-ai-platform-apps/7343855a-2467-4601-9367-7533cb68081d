import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import MobileNav from './MobileNav';

export default function MainLayout() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="md:hidden">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h1 className="text-xl font-semibold text-gray-800">MailCraft</h1>
            <MobileNav />
          </div>
        </div>
        <div className="hidden md:block">
          <Header />
        </div>
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
        <footer className="p-4 border-t border-gray-200 text-center text-sm text-gray-500">
          <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">
            Made on ZAPT
          </a>
        </footer>
      </div>
    </div>
  );
}