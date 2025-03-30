import React, { useState } from 'react';
import { FiCalendar, FiDownload } from 'react-icons/fi';
import EmailPerformance from '../components/EmailPerformance';
import PerformanceMetrics from '../components/PerformanceMetrics';
import EmailList from '../components/EmailList';

export default function Analytics() {
  const [dateRange, setDateRange] = useState('last30');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Email Analytics</h1>
        <div className="flex space-x-3">
          <div className="relative">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="border rounded-lg pl-9 pr-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500 box-border cursor-pointer"
            >
              <option value="last7">Last 7 days</option>
              <option value="last30">Last 30 days</option>
              <option value="last90">Last 90 days</option>
              <option value="year">This year</option>
            </select>
            <FiCalendar className="absolute left-3 top-2.5 text-gray-500" />
          </div>
          <button className="flex items-center space-x-2 px-3 py-2 border rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer">
            <FiDownload className="text-gray-500" />
            <span>Export</span>
          </button>
        </div>
      </div>

      <PerformanceMetrics dateRange={dateRange} />
      <EmailPerformance dateRange={dateRange} />
      <EmailList dateRange={dateRange} />
    </div>
  );
}