import React, { useState } from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';
import TemplateCard from '../components/TemplateCard';
import { templates } from '../data/templateData';

export default function Library() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    type: 'all',
  });

  const filteredTemplates = templates.filter((template) => {
    // Filter by search term
    const matchesSearch = 
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by type
    const matchesType = filters.type === 'all' || template.type === filters.type;
    
    return matchesSearch && matchesType;
  });

  const handleTypeFilterChange = (e) => {
    setFilters({
      ...filters,
      type: e.target.value,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Email Templates</h1>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search templates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 box-border"
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <div className="flex items-center space-x-2">
            <FiFilter className="text-gray-400" />
            <select
              value={filters.type}
              onChange={handleTypeFilterChange}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 box-border cursor-pointer"
            >
              <option value="all">All Types</option>
              <option value="promotional">Promotional</option>
              <option value="newsletter">Newsletter</option>
              <option value="announcement">Announcement</option>
              <option value="welcome">Welcome</option>
              <option value="followup">Follow-up</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))
        ) : (
          <div className="col-span-full py-10 text-center">
            <p className="text-gray-500">No templates found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}