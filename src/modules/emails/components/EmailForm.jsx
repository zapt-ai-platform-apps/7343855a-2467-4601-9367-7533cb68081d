import React from 'react';

export default function EmailForm({ formData, onChange }) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Purpose
        </label>
        <select
          value={formData.purpose}
          onChange={(e) => onChange('purpose', e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 box-border cursor-pointer"
        >
          <option value="">Select a purpose</option>
          <option value="promotion">Promotion or Sale</option>
          <option value="newsletter">Newsletter</option>
          <option value="announcement">Product Announcement</option>
          <option value="welcome">Welcome Email</option>
          <option value="follow-up">Follow-up</option>
          <option value="feedback">Request Feedback</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Product or Service
        </label>
        <input
          type="text"
          value={formData.product}
          onChange={(e) => onChange('product', e.target.value)}
          placeholder="What are you promoting or writing about?"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 box-border"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Target Audience
        </label>
        <input
          type="text"
          value={formData.audience}
          onChange={(e) => onChange('audience', e.target.value)}
          placeholder="Who is your email targeting?"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 box-border"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Key Points (Optional)
        </label>
        <textarea
          value={formData.keyPoints}
          onChange={(e) => onChange('keyPoints', e.target.value)}
          placeholder="Enter any specific points you want to include"
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 box-border"
        />
      </div>
    </div>
  );
}