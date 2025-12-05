import React, { useState } from 'react';
import TabBar from './components/TabBar';
import NewsTab from './components/NewsTab';
import VideoTab from './components/VideoTab';
import ToolTab from './components/ToolTab';
import NewsDetail from './components/NewsDetail';
import { NewsItem } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('news');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const renderContent = () => {
    switch (activeTab) {
      case 'news':
        return <NewsTab onNewsClick={setSelectedNews} />;
      case 'video':
        return <VideoTab />;
      case 'tools':
        return <ToolTab />;
      default:
        return <NewsTab onNewsClick={setSelectedNews} />;
    }
  };

  const getHeaderInfo = () => {
    switch (activeTab) {
      case 'news': 
        return { 
          title: '资讯', 
          sub: (
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34C759] animate-pulse"></span>
              <span>AI教程与技巧 · 每日更新</span>
            </div>
          ) 
        };
      case 'video': return { title: '视频', sub: '多平台热门AI内容' };
      case 'tools': return { title: '工具', sub: '国内外优质AI工具推荐' };
      default: return { title: 'AI资讯', sub: '' };
    }
  };

  const { title, sub } = getHeaderInfo();

  return (
    <div className="min-h-screen bg-[#F2F2F7] text-[#1C1C1E]">
      <header className="fixed top-0 left-0 right-0 bg-[#F2F2F7]/95 backdrop-blur-xl z-40 pt-safe border-b border-[#E5E5EA]">
        <div className="px-4 pt-2 pb-3">
          <h1 className="text-[28px] font-bold tracking-tight text-[#1C1C1E] leading-tight">
            {title}
          </h1>
          <div className="text-[12px] text-[#8E8E93] mt-0.5">{sub}</div>
        </div>
      </header>
      
      <main className="pt-[calc(env(safe-area-inset-top,20px)+80px)] pb-[calc(env(safe-area-inset-bottom,20px)+90px)] px-4 max-w-3xl mx-auto min-h-screen">
        {renderContent()}
      </main>

      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />

      {selectedNews && (
        <NewsDetail 
          news={selectedNews} 
          onClose={() => setSelectedNews(null)} 
        />
      )}
    </div>
  );
};

export default App;
