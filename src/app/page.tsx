'use client';

import { useState } from 'react';
import Navigation from "../components/Navigation"
import ProtoPage from '../components/pages/ProtoPage';

export type TabType = 'doomscrolling' | 'addiction' | 'rehab' | 'pressure' | 'socialMedia';

const tabColors: Record<TabType, string> = {
  doomscrolling: 'bg-blue-950',
  addiction: 'bg-blue-900',
  rehab: 'bg-blue-800',
  pressure: 'bg-blue-700',
  socialMedia: 'bg-blue-600',
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('doomscrolling');

  const renderPage = () => {
    return <ProtoPage />;
  };

  const mainBgColor = tabColors[activeTab];

  return (
    <div className={`h-screen flex flex-col ${mainBgColor}`}>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 overflow-y-auto flex">
        <div className="animate-fadeIn flex-1">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}