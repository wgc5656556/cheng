import React, { useState, useMemo, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { DEFAULT_NEWS_DATA } from '../constants';
import { NewsItem } from '../types';

interface NewsTabProps {
  onNewsClick: (item: NewsItem) => void;
}

const ITEMS_PER_PAGE = 5;

// Category Pill Styles matching HTML CSS
const getTypeStyle = (type: string) => {
  switch (type) {
    case 'tutorial': return 'bg-[#E8F5E9] text-[#2E7D32]';
    case 'update': return 'bg-[#FFF3E0] text-[#E65100]';
    case 'tip': return 'bg-[#F3E5F5] text-[#7B1FA2]';
    case 'guide': return 'bg-[#E3F2FD] text-[#1565C0]';
    case 'news': return 'bg-[#FFEBEE] text-[#C62828]';
    default: return 'bg-[#007AFF]/10 text-[#007AFF]';
  }
};

const NewsTab: React.FC<NewsTabProps> = ({ onNewsClick }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [newsData, setNewsData] = useState<NewsItem[]>(DEFAULT_NEWS_DATA);
  const [lastUpdate, setLastUpdate] = useState(() => {
    const now = new Date();
    return `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
  });

  // Today's Date info for header
  const todayDate = useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    return `${year}年${month}月${day}日`;
  }, []);

  const simpleDate = useMemo(() => {
    const now = new Date();
    return `${now.getMonth() + 1}月${now.getDate()}日`;
  }, []);

  // Fetch News using Gemini API
  const fetchLatestNews = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const apiKey = process.env.API_KEY || '';
      // If no API key, we simulate a loading delay then fall back to default data
      // In a real scenario, we would use the key.
      if (!apiKey) {
         console.warn("No API_KEY found in process.env");
         await new Promise(resolve => setTimeout(resolve, 1500));
         setNewsData(DEFAULT_NEWS_DATA); // Reset to default or you could shuffle/mock new data
      } else {
        const ai = new GoogleGenAI({ apiKey });
        const now = new Date();
        const fullDate = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`;
        const randomSeed = Date.now();

        const prompt = `你是一位资深AI领域编辑，请为${fullDate}生成20条高质量的AI工具使用教程和技巧类资讯。
        【重要要求】
        1. 内容必须新鲜、实用
        2. 随机种子：${randomSeed}
        3. 内容类型多样化：tutorial, tip, update, guide, news
        4. 覆盖热门AI工具：ChatGPT, Claude, Gemini, Midjourney, Stable Diffusion, Suno, 可灵, 豆包, Kimi, Cursor, Notion AI等
        5. 标题要吸引人
        6. 内容要有实际价值，包含具体操作步骤
        请返回JSON格式：
        {
          "articles": [
            {
              "id": 1,
              "type": "tutorial/tip/update/guide/news",
              "typeName": "教程/技巧/更新/指南/资讯",
              "tool": "工具名",
              "title": "标题",
              "desc": "摘要",
              "isHot": boolean,
              "icon": "emoji",
              "gradient": "CSS渐变色",
              "sourceUrl": "官网链接",
              "sourceName": "来源名",
              "content": "详细HTML内容"
            }
          ]
        }`;

        const response = await ai.models.generateContent({
          model: 'gemini-1.5-flash',
          contents: prompt,
          config: { responseMimeType: 'application/json' }
        });

        const text = response.text;
        if (text) {
            const parsed = JSON.parse(text);
            if (parsed.articles && Array.isArray(parsed.articles)) {
                setNewsData(parsed.articles);
            }
        }
      }
      
      const now = new Date();
      setLastUpdate(`${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`);
    } catch (error) {
      console.error("Failed to fetch news:", error);
      // Fallback to default on error
      setNewsData(DEFAULT_NEWS_DATA); 
    } finally {
      setIsLoading(false);
      setCurrentPage(1);
    }
  };

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const filteredNews = useMemo(() => {
    if (activeCategory === 'all') return newsData;
    return newsData.filter(n => n.type === activeCategory);
  }, [activeCategory, newsData]);

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const currentNews = filteredNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const categories = [
    { key: 'all', label: '全部' },
    { key: 'tutorial', label: '📚 教程' },
    { key: 'tip', label: '💡 技巧' },
    { key: 'guide', label: '📖 指南' },
    { key: 'update', label: '🆕 更新' },
    { key: 'news', label: '📢 资讯' }
  ];

  return (
    <div className="pb-4">
      {/* Date Bar */}
      <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-[14px] p-4 mb-3.5 text-white shadow-sm">
        <div className="text-[20px] font-bold mb-1">{todayDate}</div>
        <div className="text-[13px] opacity-90">为你精选最新AI教程、技巧与资讯</div>
      </div>

      {/* Refresh Bar */}
      <div className="flex justify-between items-center mb-3.5 p-3 px-3.5 bg-white rounded-[12px] shadow-sm">
        <div className="text-[12px] text-[#8E8E93]">
            {isLoading ? '准备加载...' : `更新于 ${lastUpdate}`}
        </div>
        <button 
            onClick={fetchLatestNews}
            disabled={isLoading}
            className={`flex items-center gap-1.5 px-4 py-2.5 bg-[#007AFF] text-white text-[13px] font-semibold rounded-[10px] transition-opacity ${isLoading ? 'opacity-50 cursor-not-allowed' : 'active:opacity-80'}`}
        >
            {isLoading ? (
               <>
                 <span className="animate-spin text-[14px]">⏳</span>
                 <span>生成中...</span>
               </>
            ) : (
                <>
                 <span className="text-[14px]">🔄</span>
                 <span>获取最新</span>
                </>
            )}
        </button>
      </div>

      {/* Loading State for List */}
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-20 text-[#8E8E93]">
            <div className="w-10 h-10 border-4 border-[#E5E5EA] border-t-[#007AFF] rounded-full animate-spin mb-4"></div>
            <p className="text-[14px] text-center leading-relaxed">🤖 AI正在为你生成今日最新资讯<br/>请稍候片刻...</p>
        </div>
      ) : (
        <>
          {/* Category Tabs */}
          <div className="flex overflow-x-auto px-4 pb-3.5 -mx-4 no-scrollbar mb-1 gap-2">
            {categories.map((cat) => (
              <button 
                key={cat.key}
                onClick={() => { setActiveCategory(cat.key); setCurrentPage(1); }}
                className={`flex-shrink-0 px-4 py-2 rounded-[20px] text-[13px] font-medium transition-colors ${
                  activeCategory === cat.key 
                    ? 'bg-[#007AFF] text-white' 
                    : 'bg-white text-[#8E8E93] hover:bg-gray-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="space-y-3.5">
            {currentNews.length === 0 ? (
               <div className="py-10 text-center text-[#8E8E93] text-[14px]">暂无此类资讯</div>
            ) : (
              currentNews.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onNewsClick(item)}
                  className="bg-white rounded-[16px] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] active:scale-[0.98] transition-transform cursor-pointer mb-3.5"
                >
                  <div 
                    className="h-[160px] w-full flex items-center justify-center text-[52px] text-white relative"
                    style={{ background: item.gradient }}
                  >
                    {item.icon}
                    <span className="absolute top-3 left-3 bg-black/60 text-white px-3 py-1.5 rounded-[8px] text-[12px] font-semibold backdrop-blur-md">
                      {item.tool}
                    </span>
                    {item.isHot && (
                        <span className="absolute top-3 right-3 bg-[#FF3B30] text-white px-2.5 py-1.5 rounded-[8px] text-[11px] font-semibold">
                            🔥 热门
                        </span>
                    )}
                  </div>
                  <div className="p-4">
                    <span className={`inline-block px-2.5 py-1 rounded-[8px] text-[11px] font-semibold mb-2.5 ${getTypeStyle(item.type)}`}>
                      {item.typeName}
                    </span>
                    <h3 className="text-[17px] font-semibold text-[#1C1C1E] leading-[1.4] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-[#8E8E93] leading-[1.6] line-clamp-3 mb-3">
                      {item.desc}
                    </p>
                    <div className="flex gap-4 text-[12px] text-[#8E8E93]">
                       <span>📅 {simpleDate}</span>
                       <span>📌 {item.sourceName}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-5 mb-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`min-w-[40px] h-[40px] flex items-center justify-center rounded-[12px] text-[14px] font-medium transition-colors ${
                    currentPage === i + 1
                      ? 'bg-[#007AFF] text-white'
                      : 'bg-white text-[#1C1C1E] hover:bg-gray-50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NewsTab;
