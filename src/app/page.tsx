'use client';

import { useState } from 'react';
import Navigation from "../components/Navigation";
import ProtoPage from '../components/pages/ProtoPage';
import ArticleOne from "@/components/pages/ArticleOne";
import ArticleTwo from '../components/pages/ArticleTwo';

export type TabType = 'doomscrolling' | 'addiction' | 'rehab' | 'pressure' | 'gaming' | 'socialMedia';

const tabColors: Record<TabType, string> = {
  doomscrolling: 'bg-blue-950',
  addiction: 'bg-blue-900',
  rehab: 'bg-blue-800',
  pressure: 'bg-blue-700',
  gaming: 'bg-blue-600', // NEU
  socialMedia: 'bg-blue-500', // Farbe angepasst
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('doomscrolling');

  const renderPage = () => {
    switch (activeTab) {
      case 'doomscrolling':
        return <ArticleOne />;
      case 'addiction':
        return <ArticleFour />;
      case 'rehab':
        return <div className="p-8 text-black">Rehab page (placeholder)</div>;
      case 'pressure':
        return <div className="p-8 text-black">Pressure page (placeholder)</div>;
      case 'gaming':
        return <ArticleTwo />; // NEU: Zeige ArticleTwo
      case 'socialMedia':
        return <div className="p-8 text-black">Social Media page (placeholder)</div>;
      default:
        return <ArticleOne />;
    }
  };

  const mainBgColor = tabColors[activeTab];

  return (
    <div className={`flex flex-col min-h-screen ${mainBgColor}`}>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex">
        <div className="animate-fadeIn flex-1">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}