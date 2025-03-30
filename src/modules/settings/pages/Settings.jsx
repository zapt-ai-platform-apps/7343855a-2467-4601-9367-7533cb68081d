import React, { useState } from 'react';
import AccountSettings from '../components/AccountSettings';
import PreferenceSettings from '../components/PreferenceSettings';
import ApiSettings from '../components/ApiSettings';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('account');

  const tabs = [
    { id: 'account', label: 'Account' },
    { id: 'preferences', label: 'Preferences' },
    { id: 'api', label: 'API' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-4 text-sm font-medium cursor-pointer ${
                  activeTab === tab.id
                    ? 'text-primary-600 border-b-2 border-primary-500'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'account' && <AccountSettings />}
          {activeTab === 'preferences' && <PreferenceSettings />}
          {activeTab === 'api' && <ApiSettings />}
        </div>
      </div>
    </div>
  );
}