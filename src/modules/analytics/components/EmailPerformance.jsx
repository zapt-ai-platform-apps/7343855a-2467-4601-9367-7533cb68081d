import React from 'react';

export default function EmailPerformance({ dateRange }) {
  // Simple mock chart that would be replaced with a real chart library
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Email Performance Trends</h2>
      <div className="h-64 w-full flex items-center justify-center">
        <div className="text-center text-gray-500">
          <p>Chart visualization would go here</p>
          <p className="text-sm mt-2">Showing data for: {dateRange}</p>
        </div>
      </div>
    </div>
  );
}