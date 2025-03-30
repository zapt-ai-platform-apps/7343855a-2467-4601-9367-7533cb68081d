import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit, FiPieChart, FiGrid, FiBarChart2 } from 'react-icons/fi';

export default function Dashboard() {
  // Sample data for recent emails
  const recentEmails = [
    {
      id: 1,
      title: 'Summer Sale Announcement',
      created: '2 days ago',
      performance: { opens: 245, clicks: 45 },
    },
    {
      id: 2,
      title: 'New Product Launch',
      created: '1 week ago',
      performance: { opens: 189, clicks: 37 },
    },
    {
      id: 3,
      title: 'Customer Feedback Request',
      created: '2 weeks ago',
      performance: { opens: 312, clicks: 86 },
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <Link
          to="/app/create"
          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 cursor-pointer"
        >
          <FiEdit />
          <span>Create Email</span>
        </Link>
      </div>

      {/* Stats overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Emails Created</p>
              <h3 className="text-2xl font-bold text-gray-800">48</h3>
            </div>
            <div className="bg-primary-100 p-3 rounded-full">
              <FiEdit className="text-primary-600" size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Average Open Rate</p>
              <h3 className="text-2xl font-bold text-gray-800">24.8%</h3>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FiPieChart className="text-green-600" size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Templates Used</p>
              <h3 className="text-2xl font-bold text-gray-800">12</h3>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <FiGrid className="text-purple-600" size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Conversion Rate</p>
              <h3 className="text-2xl font-bold text-gray-800">3.2%</h3>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <FiBarChart2 className="text-orange-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Recent emails */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-700">Recent Emails</h2>
          <Link
            to="/app/analytics"
            className="text-primary-600 hover:text-primary-700 text-sm cursor-pointer"
          >
            View All
          </Link>
        </div>
        <div className="divide-y divide-gray-200">
          {recentEmails.map((email) => (
            <div key={email.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-md font-medium text-gray-800">{email.title}</h3>
                  <p className="text-sm text-gray-500">Created {email.created}</p>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Opens</p>
                    <p className="font-medium text-gray-800">{email.performance.opens}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Clicks</p>
                    <p className="font-medium text-gray-800">{email.performance.clicks}</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}