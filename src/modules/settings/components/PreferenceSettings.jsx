import React, { useState } from 'react';

export default function PreferenceSettings() {
  const [preferences, setPreferences] = useState({
    defaultTone: 'professional',
    emailLanguage: 'en',
    notifications: true,
    analyticsTracking: true,
  });

  const handleToggle = (field) => {
    setPreferences({
      ...preferences,
      [field]: !preferences[field],
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences({
      ...preferences,
      [name]: value,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Email Preferences</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Default Email Tone
            </label>
            <select
              name="defaultTone"
              value={preferences.defaultTone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 box-border cursor-pointer"
            >
              <option value="professional">Professional</option>
              <option value="friendly">Friendly</option>
              <option value="casual">Casual</option>
              <option value="persuasive">Persuasive</option>
              <option value="urgent">Urgent</option>
              <option value="humorous">Humorous</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Language
            </label>
            <select
              name="emailLanguage"
              value={preferences.emailLanguage}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 box-border cursor-pointer"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="it">Italian</option>
            </select>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Notification Settings</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium text-gray-700">Email Notifications</h3>
              <p className="text-sm text-gray-500">
                Receive email notifications about your campaigns
              </p>
            </div>
            <button
              onClick={() => handleToggle('notifications')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer ${
                preferences.notifications ? 'bg-primary-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  preferences.notifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              ></span>
            </button>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium text-gray-700">Analytics Tracking</h3>
              <p className="text-sm text-gray-500">
                Track the performance of your email campaigns
              </p>
            </div>
            <button
              onClick={() => handleToggle('analyticsTracking')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer ${
                preferences.analyticsTracking ? 'bg-primary-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  preferences.analyticsTracking ? 'translate-x-6' : 'translate-x-1'
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <button
          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg cursor-pointer"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
}