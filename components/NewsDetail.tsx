import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { NewsItem } from '../types';

interface NewsDetailProps {
  news: NewsItem | null;
  onClose: () => void;
}

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

const NewsDetail: React.FC<NewsDetailProps> = ({ news, onClose }) => {
  if (!news) return null;

  const now = new Date();
  const dateStr = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`;

  return (
    <div className="fixed inset-0 bg-[#F2F2F7] z-[100] overflow-y-auto animate-[slideIn_0.3s_cubic-bezier(0.4,0,0.2,1)]">
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        
        .detail-content h3 {
          font-size: 20px;
          font-weight: 600;
          margin: 28px 0 14px;
          color: #1C1C1E;
        }
        .detail-content p {
          margin-bottom: 18px;
        }
        .detail-content ul, .detail-content ol {
          padding-left: 24px;
          margin: 18px 0;
          list-style-type: disc;
        }
        .detail-content li {
          margin-bottom: 10px;
          line-height: 1.8;
        }
        .detail-content .tip-box {
          background: linear-gradient(135deg, rgba(0,122,255,0.08), rgba(88,86,214,0.08));
          padding: 18px;
          border-radius: 14px;
          margin: 24px 0;
          border-left: 4px solid #007AFF;
        }
        .detail-content .tip-box h4 {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 10px;
          color: #007AFF;
        }
        .detail-content .step {
          display: flex;
          gap: 14px;
          margin-bottom: 16px;
          align-items: flex-start;
        }
        .detail-content .step-num {
          width: 32px;
          height: 32px;
          background: #007AFF;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          font-weight: 600;
          flex-shrink: 0;
        }
        .detail-content .step-text {
          flex: 1;
          padding-top: 5px;
        }
        .detail-content code {
          background: rgba(0,0,0,0.06);
          padding: 3px 8px;
          border-radius: 6px;
          font-family: SF Mono, monospace;
          font-size: 14px;
        }
        .detail-content .code-block {
          background: #1a1a2e;
          color: #eee;
          padding: 18px;
          border-radius: 12px;
          margin: 20px 0;
          overflow-x: auto;
          font-family: SF Mono, monospace;
          font-size: 13px;
          line-height: 1.6;
          white-space: pre-wrap;
        }
      `}</style>
      
      {/* Detail Header */}
      <div className="sticky top-0 bg-[#F2F2F7]/95 backdrop-blur-xl z-20 pt-safe px-4 pb-3.5 border-b border-gray-200">
        <button 
          onClick={onClose}
          className="flex items-center text-[#007AFF] text-[17px] font-medium active:opacity-60 transition-opacity"
        >
          <ChevronLeft size={24} className="-ml-1 mr-0.5" />
          返回
        </button>
      </div>

      <div className="px-4 pb-20 pt-5 max-w-2xl mx-auto">
        {/* Banner Image */}
        <div 
          className="w-full h-[200px] rounded-[16px] flex items-center justify-center text-[72px] shadow-sm mb-5 text-white"
          style={{ background: news.gradient }}
        >
          {news.icon}
        </div>

        <div className="mb-6">
          <span className={`inline-block px-3.5 py-1.5 rounded-[10px] text-[13px] font-semibold mb-3.5 ${getTypeStyle(news.type)}`}>
            {news.typeName} · {news.tool}
          </span>
          <h1 className="text-[26px] font-bold leading-[1.35] text-[#1C1C1E] mb-4">
            {news.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-[14px] text-[#8E8E93] pb-5 border-b border-gray-200">
             <span>📅 {dateStr}</span>
             <span>📌 来源：{news.sourceName}</span>
          </div>
        </div>

        <div 
          className="detail-content text-[16px] text-[#1C1C1E] leading-[2]"
          dangerouslySetInnerHTML={{ __html: news.content }}
        />

        <a 
          href={news.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full mt-7 py-[18px] bg-[#007AFF] text-white font-semibold text-[17px] rounded-[14px] active:scale-[0.98] transition-transform"
        >
          访问 {news.tool} 官网 →
        </a>
      </div>
    </div>
  );
};

export default NewsDetail;
