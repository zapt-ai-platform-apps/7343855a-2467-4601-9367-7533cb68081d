import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiEdit, FiGrid, FiBarChart2, FiSettings, FiMenu, FiX } from 'react-icons/fi';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: FiHome, label: 'Dashboard', path: '/app' },
    { icon: FiEdit, label: 'Create Email', path: '/app/create' },
    { icon: FiGrid, label: 'Templates', path: '/app/templates' },
    { icon: FiBarChart2, label: 'Analytics', path: '/app/analytics' },
    { icon: FiSettings, label: 'Settings', path: '/app/settings' },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
      >
        <FiMenu size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
          <div className="flex flex-col w-64 h-full bg-white">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-primary-600">MailCraft</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <FiX size={20} />
              </button>
            </div>
            <nav className="flex-1 p-4 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-3 rounded-lg ${
                      isActive
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                  end={item.path === '/app'}
                  onClick={() => setIsOpen(false)}
                >
                  {({ isActive }) => (
                    <>
                      <item.icon className={isActive ? 'text-primary-500' : 'text-gray-500'} />
                      <span>{item.label}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
            <div className="p-4 border-t border-gray-200">
              <a
                href="https://www.zapt.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-500 hover:text-gray-700"
              >
                Made on ZAPT
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}