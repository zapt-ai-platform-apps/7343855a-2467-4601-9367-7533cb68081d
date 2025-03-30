import React from 'react';

export default function EmailPreview({ data, loading }) {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-10 space-y-4">
        <div className="w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-600">Generating your email...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="bg-gray-100 p-4 rounded-full mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">No Email Generated Yet</h3>
        <p className="text-gray-500 max-w-xs">
          Fill in the form and click "Generate Email" to create your email copy.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="border-b pb-4">
        <label className="block text-sm font-medium text-gray-500 mb-1">Subject Line</label>
        <h3 className="text-lg font-medium text-gray-900">{data.subject}</h3>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-500 mb-1">Email Body</label>
        <div className="prose prose-sm max-w-none text-gray-800">
          {data.body.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}