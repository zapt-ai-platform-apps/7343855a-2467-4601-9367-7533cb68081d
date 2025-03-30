import React, { useState } from 'react';

export default function ApiSettings() {
  const [apiKey, setApiKey] = useState('*******************');
  const [showApiKey, setShowApiKey] = useState(false);
  const [isGeneratingNew, setIsGeneratingNew] = useState(false);

  const toggleShowApiKey = () => {
    setShowApiKey(!showApiKey);
  };

  const generateNewApiKey = () => {
    setIsGeneratingNew(true);
    // Simulate API call
    setTimeout(() => {
      setApiKey('new-api-key-' + Math.random().toString(36).substring(2, 10));
      setIsGeneratingNew(false);
      setShowApiKey(true);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">API Integration</h2>
        <p className="text-gray-600 mb-4">
          Use your API key to integrate MailCraft with your applications or services.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your API Key
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type={showApiKey ? 'text' : 'password'}
                  value={apiKey}
                  readOnly
                  className="bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 box-border"
                />
                <button
                  onClick={toggleShowApiKey}
                  className="text-gray-600 hover:text-gray-900 bg-white border border-gray-300 px-3 py-2 rounded-lg cursor-pointer"
                >
                  {showApiKey ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <button
            onClick={generateNewApiKey}
            disabled={isGeneratingNew}
            className="text-primary-600 hover:text-primary-700 bg-primary-50 hover:bg-primary-100 px-4 py-2 rounded-lg font-medium cursor-pointer"
          >
            {isGeneratingNew ? 'Generating...' : 'Generate New API Key'}
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Warning: Generating a new API key will invalidate your existing key.
          </p>
        </div>
      </div>

      <div className="border-t pt-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">API Documentation</h2>
        <p className="text-gray-600 mb-4">
          Learn how to use the MailCraft API to programmatically create emails and access analytics.
        </p>
        <div className="space-y-3">
          <div className="bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50">
            <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
              Getting Started with the API
            </a>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50">
            <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
              Email Generation Endpoints
            </a>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50">
            <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
              Analytics API Reference
            </a>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50">
            <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
              Webhook Integration Guide
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}