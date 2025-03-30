import React from 'react';

export default function ToneSelector({ selectedTone, onChange }) {
  const tones = [
    { id: 'professional', label: 'Professional', description: 'Formal and business-appropriate' },
    { id: 'friendly', label: 'Friendly', description: 'Warm and personable' },
    { id: 'urgent', label: 'Urgent', description: 'Creates a sense of urgency' },
    { id: 'casual', label: 'Casual', description: 'Relaxed and conversational' },
    { id: 'persuasive', label: 'Persuasive', description: 'Compelling and convincing' },
    { id: 'humorous', label: 'Humorous', description: 'Light-hearted and fun' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {tones.map((tone) => (
        <div
          key={tone.id}
          onClick={() => onChange(tone.id)}
          className={`border rounded-lg p-3 cursor-pointer transition-colors ${
            selectedTone === tone.id
              ? 'border-primary-500 bg-primary-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <h3 className="font-medium text-gray-900">{tone.label}</h3>
          <p className="text-sm text-gray-500">{tone.description}</p>
        </div>
      ))}
    </div>
  );
}