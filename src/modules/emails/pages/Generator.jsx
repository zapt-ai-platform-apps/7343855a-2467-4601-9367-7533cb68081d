import React, { useState } from 'react';
import { FiSend, FiCopy, FiDownload, FiRotateCw } from 'react-icons/fi';
import ToneSelector from '../components/ToneSelector';
import EmailForm from '../components/EmailForm';
import EmailPreview from '../components/EmailPreview';
import { generateEmailCopy } from '../api/emailGeneration';

export default function Generator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [emailData, setEmailData] = useState(null);
  const [formData, setFormData] = useState({
    purpose: '',
    product: '',
    audience: '',
    keyPoints: '',
    tone: 'professional',
  });

  const handleFormChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleToneChange = (tone) => {
    setFormData({
      ...formData,
      tone,
    });
  };

  const generateEmail = async () => {
    try {
      setIsGenerating(true);
      const result = await generateEmailCopy(formData);
      setEmailData(result);
    } catch (error) {
      console.error('Error generating email:', error);
      // Handle error
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyToClipboard = () => {
    if (emailData) {
      navigator.clipboard.writeText(
        `Subject: ${emailData.subject}\n\n${emailData.body}`
      );
      // Show success notification
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Create Email</h1>
        {emailData && (
          <div className="flex space-x-2">
            <button
              onClick={handleCopyToClipboard}
              className="text-gray-600 hover:text-gray-900 bg-white border border-gray-300 px-3 py-2 rounded-lg flex items-center space-x-1 cursor-pointer"
            >
              <FiCopy size={16} />
              <span>Copy</span>
            </button>
            <button className="text-gray-600 hover:text-gray-900 bg-white border border-gray-300 px-3 py-2 rounded-lg flex items-center space-x-1 cursor-pointer">
              <FiDownload size={16} />
              <span>Export</span>
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Email Details</h2>
            <EmailForm formData={formData} onChange={handleFormChange} />
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Email Tone</h2>
            <ToneSelector selectedTone={formData.tone} onChange={handleToneChange} />
          </div>

          <button
            onClick={generateEmail}
            disabled={isGenerating}
            className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 cursor-pointer"
          >
            {isGenerating ? (
              <>
                <FiRotateCw className="animate-spin" />
                <span>Generating...</span>
              </>
            ) : (
              <>
                <FiSend />
                <span>Generate Email</span>
              </>
            )}
          </button>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Email Preview</h2>
          </div>
          <div className="p-6">
            <EmailPreview data={emailData} loading={isGenerating} />
          </div>
        </div>
      </div>
    </div>
  );
}