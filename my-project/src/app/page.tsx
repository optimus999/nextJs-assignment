"use client"
import React, { useState } from 'react';

// Inline SVG icons
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2zm0 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-8 0H6v-6h2v6zm-2-8h2.828l7.172-7.172L20.828 9H18v8h-4v-6h-4v6H6v-8zm1-1h10l-5-5-5 5z"/>
  </svg>
);
const DocumentTextOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v4h4v12H6zm2-8h8v2H8zm0-4h8v2H8zm0 8h8v2H8z"/>
  </svg>
);
const DocumentAttachOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v4h4v12H6zM8 12v3c0 2.21 1.79 4 4 4s4-1.79 4-4v-3h-2v3c0 1.1-.9 2-2 2s-2-.9-2-2v-3H8z"/>
  </svg>
);
const SettingsOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.4 11.2a.5.5 0 01-.1-.1l-1.6-1.6a.5.5 0 010-.7l2.2-2.2a.5.5 0 01.7 0l1.6 1.6a.5.5 0 010 .7l-2.2 2.2a.5.5 0 01-.7 0zM5.3 15.3a.5.5 0 010-.7l2.2-2.2a.5.5 0 01.7 0l1.6 1.6a.5.5 0 010 .7l-2.2 2.2a.5.5 0 01-.7 0zM12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm-2-8a2 2 0 112 2 2 2 0 01-2-2z"/>
  </svg>
);
const HelpCircleOutline: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm0-13a3 3 0 00-3 3h2a1 1 0 011-1 1 1 0 011 1c0 1.5-3 1.25-3 4h2c0-2 3-2.25 3-4a3 3 0 00-3-3zm1 10h-2v-2h2z"/>
  </svg>
);
const StatsChart: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 6h-2a2 2 0 00-2 2v11a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2zM9 9H7a2 2 0 00-2 2v8a2 2 0 002 2h2a2 2 0 002-2v-8a2 2 0 00-2-2zM21 14h-2a2 2 0 00-2 2v3a2 2 0 002 2h2a2 2 0 002-2v-3a2 2 0 00-2-2z"/>
  </svg>
);
const GridOutline: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 3h7v7H3zm2 2v3h3V5zm9 0h7v7h-7zm2 2v3h3V7zm-9 9h7v7H3zm2 2v3h3v-3zm9 0h7v7h-7zm2 2v3h3v-3z"/>
  </svg>
);
const LogOutOutline: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 9v-4l-8 8 8 8v-4h4V9zm-2 2h-6l4-4v2h-4v4h4v2l-4-4z"/>
  </svg>
);
const Search: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5a6.5 6.5 0 10-6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 5L20.49 19l-5-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);
const FilterOutline: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
  </svg>
);
const EllipsisVertical: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
);
const Check: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
  </svg>
);
const Close: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
  </svg>
);


// Helper component for different colored progress circles
interface ProgressCircleProps {
  progress: number;
  color: string;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ progress, color }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          className="text-gray-200"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="64"
          cy="64"
        />
        <circle
          className={`${color}`}
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          strokeLinecap="round"
          r={radius}
          cx="64"
          cy="64"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
            transition: 'stroke-dashoffset 0.5s ease-in-out',
          }}
        />
      </svg>
      <span className="absolute text-2xl font-bold text-gray-800">{progress}%</span>
    </div>
  );
};

// Main App Component
export default function App() {
  const [selectedItem, setSelectedItem] = useState('Home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: HomeIcon },
    { name: 'Stages & Checklist', icon: DocumentTextOutline },
    { name: 'Upload Docs', icon: DocumentAttachOutline },
    { name: 'Preferred Vendors', icon: GridOutline },
    { name: 'Tech Stack', icon: StatsChart },
    { name: 'Targets', icon: StatsChart },
    { name: 'Zee Sales Targets', icon: StatsChart },
    { name: 'MAI Settings', icon: SettingsOutline },
  ];

  const pendingQuestions = [
    { question: 'Pending Questions', count: 3 },
  ];

  const prospectLeads = [
    { name: 'Wade Warren', stage: 'Initial Inquiry', avatar: 'https://placehold.co/40x40/f3f4f6/333?text=WW' },
    { name: 'Ava Wright', stage: 'Initial Inquiry', avatar: 'https://placehold.co/40x40/f3f4f6/333?text=AW' },
    { name: 'Cody Fisher', stage: 'Initial Inquiry', avatar: 'https://placehold.co/40x40/f3f4f6/333?text=CF' },
  ];

  const files = [
    {
      name: 'Tech requirements.pdf',
      type: 'PDF',
      size: '200 KB',
      docType: 'Legal',
      aiAppInclusion: true,
      dashboardInclusion: true,
      stageAccess: 'Full',
    },
    {
      name: 'Dashboard screenshot.jpg',
      type: 'JPG',
      size: '720 KB',
      docType: 'Vendors & Assets',
      aiAppInclusion: false,
      dashboardInclusion: true,
      stageAccess: 'Onboarding',
    },
    {
      name: 'Dashboard prototype recording.mp4',
      type: 'MP4',
      size: '16 MB',
      docType: 'Technology',
      aiAppInclusion: true,
      dashboardInclusion: false,
      stageAccess: 'Franchisee',
    },
    {
      name: 'Financial Overview.docx',
      type: 'DOCX',
      size: '4.2 MB',
      docType: 'Financial',
      aiAppInclusion: false,
      dashboardInclusion: true,
      stageAccess: 'Prospect',
    },
    {
      name: 'UX Design Guidelines.docx',
      type: 'DOCX',
      size: '400 KB',
      docType: 'Legal',
      aiAppInclusion: false,
      dashboardInclusion: true,
      stageAccess: 'Onboarding',
    },
    {
      name: 'Dashboard Interaction.aep',
      type: 'AEP',
      size: '12 MB',
      docType: 'Legal',
      aiAppInclusion: true,
      dashboardInclusion: false,
      stageAccess: 'Franchisee',
    },
    {
      name: 'Briefing call recording.mp3',
      type: 'MP3',
      size: '18.6 MB',
      docType: 'Financial',
      aiAppInclusion: true,
      dashboardInclusion: false,
      stageAccess: 'Prospect',
    },
  ];

  const getDocTypeColor = (docType: string) => {
    switch (docType) {
      case 'Legal':
        return 'bg-blue-100 text-blue-800';
      case 'Vendors & Assets':
        return 'bg-green-100 text-green-800';
      case 'Technology':
        return 'bg-orange-100 text-orange-800';
      case 'Financial':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  const ToggleSwitch: React.FC<{ checked: boolean; onChange: () => void }> = ({ checked, onChange }) => (
    <label className="relative inline-block w-10 h-6 cursor-pointer">
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only peer" />
      <div className="absolute top-0 left-0 w-10 h-6 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-indigo-600"></div>
      <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out transform peer-checked:translate-x-4"></div>
    </label>
  );

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen font-sans">
      {/* Sidebar */}
      <aside className={`fixed lg:relative w-64 bg-blue-900 text-gray-300 flex-col justify-between p-4 shadow-xl rounded-2xl m-4 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <div className="flex-1 flex flex-col h-full">
          <div className="flex items-center space-x-2 p-2">
            <div className="bg-gray-200 w-8 h-8 rounded-full"></div>
            <span className="text-xl font-semibold text-white">weframe.tech</span>
          </div>
          <nav className="mt-8 space-y-2 flex-1 overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setSelectedItem(item.name)}
                className={`flex items-center w-full space-x-3 p-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:translate-x-1 ${
                  selectedItem === item.name ? 'bg-indigo-600 text-white shadow-lg' : 'hover:bg-gray-800'
                }`}
              >
                <item.icon />
                <span>{item.name}</span>
              </button>
            ))}
            {pendingQuestions.map((item) => (
              <button
                key={item.question}
                onClick={() => setSelectedItem(item.question)}
                className={`flex items-center w-full justify-between p-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:translate-x-1 ${
                  selectedItem === item.question ? 'bg-indigo-600 text-white shadow-lg' : 'hover:bg-gray-800'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <HelpCircleOutline className="w-5 h-5" />
                  <span>{item.question}</span>
                </div>
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">{item.count}</span>
              </button>
            ))}
          </nav>
        </div>
        <div className="p-4">
          <button className="flex items-center w-full space-x-3 p-3 rounded-xl text-gray-300 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800">
            <LogOutOutline className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile menu button */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-xl bg-blue-900 text-white"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 animate-fade-in-up">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-0">Hello, John!</h1>
          <div className="flex items-center space-x-4">
            <Search className="w-6 h-6 text-gray-600 cursor-pointer transition-transform duration-300 hover:scale-110" />
            <div className="relative">
              <span className="w-3 h-3 bg-red-500 rounded-full absolute top-0 right-0"></span>
              <EllipsisVertical className="w-6 h-6 text-gray-600 cursor-pointer transition-transform duration-300 hover:scale-110" />
            </div>
            <img
              src="https://placehold.co/40x40/e5e7eb/4b5563?text=JS"
              alt="User Avatar"
              className="w-10 h-10 rounded-full transition-transform duration-300 hover:scale-110"
            />
          </div>
        </header>

        {/* Dashboard Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            {/* Account Progress Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg h-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h2 className="text-xl font-semibold mb-4">Account Progress</h2>
              <div className="flex flex-col items-center">
                <ProgressCircle progress={85} color="text-indigo-600" />
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Steps Completed</h3>
                <ul className="space-y-2">
                                      <li className="flex items-center space-x-2 text-gray-700 transition-transform duration-300 hover:translate-x-1">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>Profile Setup</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-700 transition-transform duration-300 hover:translate-x-1">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>Initial Training</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-700 transition-transform duration-300 hover:translate-x-1">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>Legal Documents</span>
                    </li>
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium mb-2">Steps Remaining</h3>
                <ul className="space-y-2">
                                      <li className="flex items-center space-x-2 text-gray-700 transition-transform duration-300 hover:translate-x-1">
                      <Close className="w-5 h-5 text-red-500" />
                      <span>Financial Integration</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-700 transition-transform duration-300 hover:translate-x-1">
                      <Close className="w-5 h-5 text-red-500" />
                      <span>Final Review</span>
                    </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Total Franchisees Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h2 className="text-xl font-semibold mb-4">Total Franchisees Onboard</h2>
              <div className="flex items-end justify-between mb-4">
                <div>
                  <span className="text-4xl font-bold">14</span>
                  <span className="text-green-500 ml-2 text-sm font-medium">▲ 7.4%</span>
                </div>
                <div className="flex -space-x-2">
                  <img className="w-8 h-8 rounded-full border-2 border-white transition-transform duration-300 hover:scale-110" src="https://placehold.co/32x32/f3f4f6/333?text=1" alt="avatar" />
                  <img className="w-8 h-8 rounded-full border-2 border-white transition-transform duration-300 hover:scale-110" src="https://placehold.co/32x32/f3f4f6/333?text=2" alt="avatar" />
                  <img className="w-8 h-8 rounded-full border-2 border-white transition-transform duration-300 hover:scale-110" src="https://placehold.co/32x32/f3f4f6/333?text=3" alt="avatar" />
                  <img className="w-8 h-8 rounded-full border-2 border-white transition-transform duration-300 hover:scale-110" src="https://placehold.co/32x32/f3f4f6/333?text=4" alt="avatar" />
                  <span className="flex items-center justify-center w-8 h-8 text-xs font-medium text-gray-600 bg-gray-200 rounded-full border-2 border-white">+7</span>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center justify-between transition-transform duration-300 hover:translate-x-1">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    <span>Stage 1 (Initial Inquiry)</span>
                  </div>
                  <span className="font-semibold">02</span>
                </li>
                <li className="flex items-center justify-between transition-transform duration-300 hover:translate-x-1">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span>Stage 2 (Document Submission)</span>
                  </div>
                  <span className="font-semibold">07</span>
                </li>
                <li className="flex items-center justify-between transition-transform duration-300 hover:translate-x-1">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span>Stage 3 (Training)</span>
                  </div>
                  <span className="font-semibold">05</span>
                </li>
              </ul>
            </div>

            {/* Key Insights & Feedback Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h2 className="text-xl font-semibold mb-4">Key Insights & Feedback</h2>
              <div className="flex items-center justify-between mb-2">
                <span className="text-4xl font-bold">10%</span>
                <button className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  Top Performer
                </button>
              </div>
              <p className="text-gray-600 text-lg font-medium mb-4">Sales Growth</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">Feedback</h3>
                <p className="text-gray-600 text-sm mt-1">Franchisees are requesting more detailed training materials.</p>
              </div>
            </div>

            {/* Financial Wellbeing Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h2 className="text-xl font-semibold mb-4">Financial Wellbeing</h2>
              <div className="flex items-end justify-between mb-4">
                <div>
                  <span className="text-4xl font-bold">20</span>
                  <span className="text-green-500 ml-2 text-sm font-medium">▲ 2.1%</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm font-medium mb-4">Total Franchisees</p>
              <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Target</h3>
                  <p className="text-green-600 font-bold">$500,000</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Current</h3>
                  <p className="text-gray-800 font-bold">$450,000</p>
                </div>
              </div>
            </div>

            {/* Prospect Leads Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h2 className="text-xl font-semibold mb-4">Prospect Leads</h2>
              <ul className="space-y-4">
                {prospectLeads.map((lead) => (
                  <li key={lead.name} className="flex items-center space-x-3 transition-transform duration-300 hover:translate-x-1">
                    <img src={lead.avatar} alt={lead.name} className="w-10 h-10 rounded-full" />
                    <div>
                      <h3 className="font-semibold text-gray-800">{lead.name}</h3>
                      <p className="text-gray-600 text-sm">{lead.stage}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* My Uploads Table */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">My Uploads</h2>
            <EllipsisVertical className="w-6 h-6 text-gray-600 cursor-pointer transition-transform duration-300 hover:scale-110" />
          </div>
          <p className="text-gray-600 text-sm mb-4">Documents that are uploaded by you.</p>
          <div className="flex items-center space-x-4 mb-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-xl text-gray-700 transition-all duration-300 hover:bg-gray-100 transform hover:scale-105">
              <FilterOutline className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200 text-left text-gray-500 text-sm font-semibold uppercase">
                  <th className="p-4 w-12">
                    <input type="checkbox" className="form-checkbox text-indigo-600 rounded" />
                  </th>
                  <th className="p-4">Document Name</th>
                  <th className="p-4">Document Type</th>
                  <th className="p-4">AI App Inclusion</th>
                  <th className="p-4">Dashboard Inclusion</th>
                  <th className="p-4">Stage Access</th>
                  <th className="p-4 text-right"></th>
                </tr>
              </thead>
              <tbody>
                {files.map((file, index) => (
                  <tr key={index} className="border-b border-gray-200 last:border-b-0 transition-colors duration-300 hover:bg-gray-50">
                    <td className="p-4">
                      <input type="checkbox" className="form-checkbox text-indigo-600 rounded" />
                    </td>
                    <td className="p-4 flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs transition-colors duration-300 ${
                        file.type === 'PDF' ? 'bg-red-100 text-red-500' :
                        file.type === 'JPG' ? 'bg-blue-100 text-blue-500' :
                        file.type === 'MP4' ? 'bg-purple-100 text-purple-500' :
                        file.type === 'DOCX' ? 'bg-blue-100 text-blue-500' :
                        file.type === 'AEP' ? 'bg-yellow-100 text-yellow-500' :
                        file.type === 'MP3' ? 'bg-green-100 text-green-500' : 'bg-gray-100'
                      }`}>
                        {file.type}
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{file.name}</div>
                        <div className="text-sm text-gray-500">{file.size}</div>
                      </div>
                    </td>
                    <td className="p-4 text-gray-700">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${getDocTypeColor(file.docType)}`}>
                        {file.docType}
                      </span>
                    </td>
                    <td className="p-4">
                      <ToggleSwitch checked={file.aiAppInclusion} onChange={() => {}} />
                    </td>
                    <td className="p-4">
                      <ToggleSwitch checked={file.dashboardInclusion} onChange={() => {}} />
                    </td>
                    <td className="p-4">
                      <select className="bg-gray-100 p-2 rounded-lg text-gray-700 focus:outline-none transition-all duration-300 hover:bg-gray-200">
                        <option>{file.stageAccess}</option>
                      </select>
                    </td>
                    <td className="p-4 text-right whitespace-nowrap">
                      <button className="text-gray-500 hover:text-red-500 mr-2 transition-colors duration-200">Delete</button>
                      <button className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
