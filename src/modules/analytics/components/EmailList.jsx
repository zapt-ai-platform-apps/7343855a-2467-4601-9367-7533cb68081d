import React from 'react';

export default function EmailList({ dateRange }) {
  // This would typically come from an API based on the dateRange
  const emails = [
    {
      id: 1,
      subject: 'Summer Sale Announcement',
      sentDate: '2023-06-15',
      metrics: { sent: 1500, opens: 750, clicks: 225, conversions: 45 },
    },
    {
      id: 2,
      subject: 'New Product Launch',
      sentDate: '2023-06-08',
      metrics: { sent: 2000, opens: 1200, clicks: 360, conversions: 72 },
    },
    {
      id: 3,
      subject: 'Customer Feedback Request',
      sentDate: '2023-06-01',
      metrics: { sent: 1800, opens: 900, clicks: 270, conversions: 54 },
    },
    {
      id: 4,
      subject: 'June Newsletter',
      sentDate: '2023-05-25',
      metrics: { sent: 2500, opens: 1250, clicks: 375, conversions: 75 },
    },
    {
      id: 5,
      subject: 'Exclusive Member Offer',
      sentDate: '2023-05-18',
      metrics: { sent: 1200, opens: 720, clicks: 216, conversions: 43 },
    },
  ];

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Recent Email Campaigns</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subject
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sent Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sent
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Opens
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Clicks
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Conversions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {emails.map((email) => (
              <tr key={email.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {email.subject}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(email.sentDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {email.metrics.sent.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {email.metrics.opens.toLocaleString()} 
                  <span className="text-xs text-gray-400 ml-1">
                    ({((email.metrics.opens / email.metrics.sent) * 100).toFixed(1)}%)
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {email.metrics.clicks.toLocaleString()}
                  <span className="text-xs text-gray-400 ml-1">
                    ({((email.metrics.clicks / email.metrics.opens) * 100).toFixed(1)}%)
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {email.metrics.conversions.toLocaleString()}
                  <span className="text-xs text-gray-400 ml-1">
                    ({((email.metrics.conversions / email.metrics.clicks) * 100).toFixed(1)}%)
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}