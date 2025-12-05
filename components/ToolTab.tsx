import React, { useState } from 'react';
import { TOOLS_DATA } from '../constants';
import CategoryTabs from './CategoryTabs';
import { ChevronRight } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: '全部' },
  { id: 'cn', label: '国内' },
  { id: '对话', label: '对话' },
  { id: '绘画', label: '绘画' },
  { id: '视频', label: '视频' },
  { id: '音频', label: '音频' },
  { id: '编程', label: '编程' },
  { id: '效率', label: '效率' },
  { id: '搜索', label: '搜索' },
];

const ToolTab: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = TOOLS_DATA.filter(tool => {
    let matchesCategory = true;
    if (activeCategory === 'cn') {
      matchesCategory = !!tool.cn;
    } else if (activeCategory !== 'all') {
      matchesCategory = tool.cat === activeCategory;
    }

    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pb-4">
      <div className="relative mb-3 bg-white rounded-[12px] p-2.5 px-3.5 flex items-center gap-2 shadow-sm">
         <span className="text-[15px] grayscale">🔍</span>
         <input 
            type="text"
            className="flex-1 border-none bg-transparent text-[15px] outline-none placeholder-gray-400"
            placeholder="搜索AI工具..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
         />
      </div>

      <CategoryTabs 
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      <div className="space-y-2 mt-2">
        {filteredTools.map((tool, index) => (
          <a
            key={index}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 bg-white rounded-[12px] cursor-pointer active:bg-gray-50 transition-colors shadow-sm"
          >
            <div 
              className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center text-[22px] text-white flex-shrink-0 mr-3"
              style={{ background: tool.bg }}
            >
              {tool.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[15px] font-semibold text-[#1C1C1E]">{tool.name}</span>
                {tool.cn && (
                  <span className="inline-block px-1.5 py-[2px] rounded-[4px] text-[9px] font-semibold bg-[#FEE2E2] text-[#DC2626]">
                    国产
                  </span>
                )}
                {tool.free && (
                  <span className="inline-block px-1.5 py-[2px] rounded-[4px] text-[9px] font-semibold bg-[#D1FAE5] text-[#059669]">
                    免费
                  </span>
                )}
              </div>
              <div className="text-[11px] font-medium text-[#007AFF] mb-0.5">
                {tool.cat}
              </div>
              <div className="text-[12px] text-[#8E8E93] line-clamp-1 leading-tight overflow-hidden text-ellipsis whitespace-nowrap">
                {tool.desc}
              </div>
            </div>
            {/* <ChevronRight size={16} className="text-[#C7C7CC] ml-2 flex-shrink-0" />  Removed arrow to strictly match HTML design if preferred, or keep it as React enhancement */}
          </a>
        ))}
        {filteredTools.length === 0 && (
          <div className="py-20 text-center">
            <div className="text-4xl mb-3 grayscale opacity-50">🔍</div>
            <p className="text-[#8E8E93] text-sm">未找到相关工具</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolTab;