'use client';

import { useState } from 'react';
import Navigation from "../components/Navigation";
import ArticleOne from "@/components/pages/ArticleOne";
import ArticleTwo from '../components/pages/ArticleTwo';
import ArticleFour from "@/components/pages/ArticleFour";
import ArticleThree from "@/components/pages/ArticleThree";

export type TabType = 'doomscrolling' | 'addiction' | 'pressure' | 'gaming';

const tabColors: Record<TabType, string> = {
  doomscrolling: 'bg-blue-950/90',
  addiction: 'bg-blue-700/90',
  pressure: 'bg-blue-800/90',
  gaming: 'bg-blue-900/90',
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('doomscrolling');

  const renderPage = () => {
    switch (activeTab) {
      case 'doomscrolling':
        return <ArticleOne />;
      case 'addiction':
        return <ArticleFour />;
      case 'pressure':
        return <ArticleThree />;
      case 'gaming':
        return <ArticleTwo />;
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