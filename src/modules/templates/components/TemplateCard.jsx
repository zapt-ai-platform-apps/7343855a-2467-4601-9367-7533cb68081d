import React from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiCopy } from 'react-icons/fi';

export default function TemplateCard({ template }) {
  const typeColors = {
    promotional: 'bg-green-100 text-green-800',
    newsletter: 'bg-blue-100 text-blue-800',
    announcement: 'bg-purple-100 text-purple-800',
    welcome: 'bg-yellow-100 text-yellow-800',
    followup: 'bg-pink-100 text-pink-800',
    feedback: 'bg-indigo-100 text-indigo-800',
  };

  const typeColor = typeColors[template.type] || 'bg-gray-100 text-gray-800';

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow border border-gray-200">
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${typeColor}`}>
              {template.type.charAt(0).toUpperCase() + template.type.slice(1)}
            </span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{template.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{template.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
              <FiEye size={18} />
            </button>
            <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
              <FiCopy size={18} />
            </button>
          </div>
          <Link
            to={`/app/create?template=${template.id}`}
            className="px-3 py-1.5 bg-primary-50 text-primary-600 hover:bg-primary-100 rounded text-sm font-medium cursor-pointer"
          >
            Use Template
          </Link>
        </div>
      </div>
    </div>
  );
}