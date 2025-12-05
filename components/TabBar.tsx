import React from 'react';
import { Newspaper, Clapperboard, Wrench } from 'lucide-react';

interface TabBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 z-50 pb-safe">
      <div className="flex justify-around items-center px-2 py-2">
        <button
          onClick={() => onTabChange('news')}
          className={`flex flex-col items-center justify-center p-2 flex-1 transition-colors duration-200 ${
            activeTab === 'news' ? 'text-[#007AFF]' : 'text-gray-400'
          }`}
        >
          <Newspaper size={24} className="mb-1" strokeWidth={activeTab === 'news' ? 2.5 : 2} />
          <span className="text-[10px] font-medium">资讯</span>
        </button>
        <button
          onClick={() => onTabChange('video')}
          className={`flex flex-col items-center justify-center p-2 flex-1 transition-colors duration-200 ${
            activeTab === 'video' ? 'text-[#007AFF]' : 'text-gray-400'
          }`}
        >
          <Clapperboard size={24} className="mb-1" strokeWidth={activeTab === 'video' ? 2.5 : 2} />
          <span className="text-[10px] font-medium">视频</span>
        </button>
        <button
          onClick={() => onTabChange('tools')}
          className={`flex flex-col items-center justify-center p-2 flex-1 transition-colors duration-200 ${
            activeTab === 'tools' ? 'text-[#007AFF]' : 'text-gray-400'
          }`}
        >
          <Wrench size={24} className="mb-1" strokeWidth={activeTab === 'tools' ? 2.5 : 2} />
          <span className="text-[10px] font-medium">工具</span>
        </button>
      </div>
    </nav>
  );
};

export default TabBar;
