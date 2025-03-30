import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLayout, FiSliders, FiBarChart, FiUsers } from 'react-icons/fi';

export default function Landing() {
  const features = [
    {
      icon: FiMail,
      title: 'AI-Driven Copy Generation',
      description:
        'Generate high-converting email copy with just a few clicks. Our AI creates subject lines, body text, and calls to action.',
    },
    {
      icon: FiLayout,
      title: 'Template Library',
      description:
        'Access professionally designed email templates for various purposes, from promotions to newsletters.',
    },
    {
      icon: FiSliders,
      title: 'Tone & Style Customization',
      description:
        'Adjust the tone of your emails to match your brand's voice, from formal to friendly.',
    },
    {
      icon: FiBarChart,
      title: 'Performance Analytics',
      description:
        'Track key metrics like open rates and click-through rates to optimize your campaigns.',
    },
    {
      icon: FiUsers,
      title: 'Collaboration Tools',
      description:
        'Share email drafts with team members for seamless review and feedback.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Create Better Emails with AI
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              MailCraft helps you write persuasive, engaging emails in seconds, not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/app"
                className="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg shadow-lg cursor-pointer"
              >
                Get Started
              </Link>
              <a
                href="#features"
                className="btn bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium text-lg cursor-pointer"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Features that Make Email Marketing Easier
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <feature.icon className="text-primary-500 w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Ready to Revolutionize Your Email Marketing?
          </h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Join thousands of marketers who are saving time and improving results with MailCraft.
          </p>
          <Link
            to="/app"
            className="btn bg-primary-600 text-white hover:bg-primary-700 px-8 py-3 rounded-lg font-medium text-lg shadow-md cursor-pointer"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">MailCraft</h2>
              <p className="text-gray-400">Your AI Email Copywriting Partner</p>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.zapt.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Made on ZAPT
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}