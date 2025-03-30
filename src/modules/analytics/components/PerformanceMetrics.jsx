import React from 'react';
import { FiMail, FiEye, FiMousePointer, FiUserPlus } from 'react-icons/fi';

export default function PerformanceMetrics({ dateRange }) {
  // This would typically come from an API
  const metrics = {
    'last7': { sent: 256, opens: 184, clicks: 67, conversions: 12 },
    'last30': { sent: 1024, opens: 742, clicks: 291, conversions: 58 },
    'last90': { sent: 3072, opens: 2148, clicks: 896, conversions: 163 },
    'year': { sent: 12800, opens: 9216, clicks: 3328, conversions: 640 }
  };

  const currentMetrics = metrics[dateRange] || metrics.last30;
  
  const openRate = ((currentMetrics.opens / currentMetrics.sent) * 100).toFixed(1);
  const clickRate = ((currentMetrics.clicks / currentMetrics.opens) * 100).toFixed(1);
  const conversionRate = ((currentMetrics.conversions / currentMetrics.clicks) * 100).toFixed(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white shadow rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500">Emails Sent</p>
            <h3 className="text-2xl font-bold text-gray-800">{currentMetrics.sent.toLocaleString()}</h3>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <FiMail className="text-blue-600" size={24} />
          </div>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500">Open Rate</p>
            <h3 className="text-2xl font-bold text-gray-800">{openRate}%</h3>
          </div>
          <div className="bg-green-100 p-3 rounded-full">
            <FiEye className="text-green-600" size={24} />
          </div>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500">Click Rate</p>
            <h3 className="text-2xl font-bold text-gray-800">{clickRate}%</h3>
          </div>
          <div className="bg-orange-100 p-3 rounded-full">
            <FiMousePointer className="text-orange-600" size={24} />
          </div>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500">Conversion Rate</p>
            <h3 className="text-2xl font-bold text-gray-800">{conversionRate}%</h3>
          </div>
          <div className="bg-purple-100 p-3 rounded-full">
            <FiUserPlus className="text-purple-600" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}