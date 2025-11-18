// src/app/page.tsx
'use client';

import { useState } from 'react';
import Navigation from "../components/Navigation";
import ProtoPage from '../components/pages/ProtoPage';
import ArticleOne from "@/components/pages/ArticleOne";
import ArticleTwo from '../components/pages/ArticleTwo';
import ArticleFour from "@/components/pages/ArticleFour";
import ArticleThree from "@/components/pages/ArticleThree"; // Wichtig: Import hinzugefügt

export type TabType = 'doomscrolling' | 'addiction' | 'rehab' | 'pressure' | 'gaming' | 'socialMedia';

const tabColors: Record<TabType, string> = {
  doomscrolling: 'bg-blue-950/80', // DRUG (950)
  addiction: 'bg-blue-700/80', // ROT (700)
  rehab: 'bg-blue-800/80',
  pressure: 'bg-blue-800/80', // SYSTEM (800)
  gaming: 'bg-blue-900/80', // HABITS (900)
  socialMedia: 'bg-blue-500/80',
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
        return <ArticleThree />; // ArticleThree wird hier gerendert
      case 'gaming':
        return <ArticleTwo />;
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