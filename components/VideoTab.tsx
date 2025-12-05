import React, { useState } from 'react';
import { CREATORS_DATA, TOPICS_DATA, VIDEO_LIST_DATA } from '../constants';
import { CreatorItem } from '../types';

const VideoTab: React.FC = () => {
  const [selectedCreator, setSelectedCreator] = useState<CreatorItem | null>(null);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'bili': return 'B';
      case 'douyin': return 'D';
      case 'xhs': return '红';
      case 'youtube': return 'Y';
      default: return '';
    }
  };

  const getPlatformName = (platform: string) => {
    switch (platform) {
      case 'bili': return 'B站';
      case 'douyin': return '抖音';
      case 'xhs': return '小红书';
      case 'youtube': return 'YouTube';
      default: return platform;
    }
  };
  
  const getPlatformColor = (platform: string) => {
    switch (platform) {
        case 'bili': return '#FB7299';
        case 'douyin': return '#000000';
        case 'xhs': return '#FF2442';
        case 'youtube': return '#FF0000';
        default: return '#1DA1F2';
    }
  };
  
  const getPlatformBgClass = (platform: string) => {
      switch (platform) {
          case 'bili': return 'bg-[#FEF0F5] text-[#FB7299]';
          case 'douyin': return 'bg-gray-100 text-black';
          case 'xhs': return 'bg-[#FFF0F1] text-[#FF2442]';
          case 'youtube': return 'bg-[#FFF0F0] text-[#FF0000]';
          default: return 'bg-gray-50 text-gray-600';
      }
  };

  return (
    <div className="pb-4 space-y-6">
      
      {/* 1. Creators Section */}
      <section>
        <div className="flex justify-between items-center mb-3.5">
          <h2 className="text-[20px] font-bold text-[#1C1C1E]">🔥 热门AI达人</h2>
          <span className="text-[12px] text-[#8E8E93] bg-white px-3 py-1.5 rounded-[10px] shadow-sm">点击访问主页</span>
        </div>
        
        <div className="flex overflow-x-auto gap-4 pb-5 px-4 -mx-4 no-scrollbar">
          {CREATORS_DATA.map((creator) => (
            <div 
              key={creator.name}
              className="flex-shrink-0 w-[110px] text-center cursor-pointer active:opacity-70 transition-opacity"
              onClick={() => setSelectedCreator(creator)}
            >
              <div 
                className="w-[76px] h-[76px] mx-auto mb-2.5 rounded-full flex items-center justify-center text-white text-[30px] relative shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
                style={{ background: creator.gradient }}
              >
                {creator.name[0]}
                <span 
                    className="absolute -bottom-0.5 -right-0.5 w-[24px] h-[24px] rounded-full border-2 border-white flex items-center justify-center text-[11px] text-white font-bold"
                    style={{ background: getPlatformColor(creator.platform) }}
                >
                    {getPlatformIcon(creator.platform)}
                </span>
              </div>
              <div className="text-[13px] font-semibold text-[#1C1C1E] whitespace-nowrap overflow-hidden text-ellipsis px-1">
                {creator.name}
              </div>
              <div className="text-[11px] text-[#8E8E93] mt-0.5">
                {creator.fans}粉丝
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Topics Section */}
      <section>
        <div className="flex justify-between items-center mb-3.5">
          <h2 className="text-[20px] font-bold text-[#1C1C1E]">📺 热门话题</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {TOPICS_DATA.map((topic) => (
            <div 
              key={topic.name}
              onClick={() => window.open(topic.url, '_blank')}
              className="bg-white rounded-[14px] p-4 cursor-pointer active:scale-[0.98] transition-transform shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            >
              <div className="text-[32px] mb-2.5">{topic.icon}</div>
              <div className="text-[15px] font-semibold text-[#1C1C1E] mb-1.5">{topic.name}</div>
              <div className="text-[12px] text-[#8E8E93] leading-snug mb-2.5">{topic.desc}</div>
              <span className={`inline-flex items-center px-2.5 py-1 rounded-[8px] text-[11px] font-medium ${getPlatformBgClass(topic.platform)}`}>
                {getPlatformName(topic.platform)}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured List Section */}
      <section>
        <div className="flex justify-between items-center mb-3.5">
          <h2 className="text-[20px] font-bold text-[#1C1C1E]">🎬 精选内容</h2>
        </div>
        
        <div className="flex flex-col gap-3">
          {VIDEO_LIST_DATA.map((video, idx) => (
            <div 
              key={idx}
              onClick={() => window.open(video.url, '_blank')}
              className="flex gap-3.5 bg-white rounded-[14px] p-3.5 cursor-pointer active:bg-gray-50 transition-colors shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            >
              <div 
                className="w-[140px] h-[80px] rounded-[10px] flex-shrink-0 flex items-center justify-center text-white text-[30px] relative overflow-hidden"
                style={{ background: video.gradient }}
              >
                🎬
                <div className="absolute w-[36px] h-[36px] bg-black/60 rounded-full flex items-center justify-center pl-1">
                   <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-0.5"></div>
                </div>
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="text-[14px] font-semibold text-[#1C1C1E] leading-[1.4] mb-2 line-clamp-2">
                  {video.title}
                </div>
                <div className="flex items-center gap-2 text-[12px] text-[#8E8E93]">
                   <span>👤 {video.author}</span>
                   <span 
                     className="px-1.5 py-[1px] rounded-[4px] text-[10px] font-medium"
                     style={{ 
                         backgroundColor: `${getPlatformColor(video.platform)}20`,
                         color: getPlatformColor(video.platform)
                     }}
                   >
                     {getPlatformName(video.platform)}
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Creator Detail Modal */}
      {selectedCreator && (
        <div 
            className="fixed inset-0 bg-black/50 z-[300] flex items-end justify-center animate-[fadeIn_0.2s_ease-out]"
            onClick={() => setSelectedCreator(null)}
        >
            <div 
                className="bg-white rounded-t-[24px] w-full max-h-[85vh] overflow-y-auto pb-safe animate-[slideUp_0.3s_cubic-bezier(0.16,1,0.3,1)]"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex items-center justify-between p-5 border-b border-gray-100 sticky top-0 bg-white z-10">
                    <span className="text-[18px] font-semibold text-[#1C1C1E]">详情</span>
                    <button 
                        onClick={() => setSelectedCreator(null)}
                        className="w-8 h-8 flex items-center justify-center text-gray-500 text-[28px]"
                    >
                        ×
                    </button>
                </div>
                
                <div className="p-5">
                    <div className="mb-5 text-[15px] leading-relaxed text-[#1C1C1E]">
                        <p className="mb-2"><strong>📺 平台：</strong>{getPlatformName(selectedCreator.platform)}</p>
                        <p className="mb-2"><strong>👥 粉丝：</strong>{selectedCreator.fans}</p>
                        <p><strong>📝 简介：</strong>{selectedCreator.desc}</p>
                    </div>
                    
                    <a
                        href={selectedCreator.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-4 text-white rounded-[14px] font-semibold text-[17px] text-center mb-3 active:opacity-90 transition-opacity"
                        style={{ background: getPlatformColor(selectedCreator.platform) }}
                    >
                        🔗 访问{selectedCreator.name}的{getPlatformName(selectedCreator.platform)}主页
                    </a>
                    
                    <button
                        onClick={() => setSelectedCreator(null)}
                        className="block w-full py-4 bg-[#F2F2F7] text-[#1C1C1E] rounded-[14px] font-semibold text-[17px] active:bg-gray-200 transition-colors"
                    >
                        关闭
                    </button>
                    
                    <div className="text-[12px] text-[#8E8E93] text-center mt-3 leading-relaxed">
                        点击上方按钮将跳转到{getPlatformName(selectedCreator.platform)}查看该达人的最新内容
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
            `}</style>
        </div>
      )}
    </div>
  );
};

export default VideoTab;
