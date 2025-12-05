import React from 'react';

interface CategoryTabsProps {
  categories: { id: string; label: string }[];
  activeCategory: string;
  onSelect: (id: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories, activeCategory, onSelect }) => {
  return (
    <div className="flex overflow-x-auto px-4 pb-2.5 -mx-4 no-scrollbar">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`flex-shrink-0 px-3 py-1.5 mr-1.5 rounded-[14px] text-[12px] font-medium transition-all duration-200 ${
            activeCategory === cat.id
              ? 'bg-[#007AFF] text-white'
              : 'bg-white text-[#8E8E93] hover:bg-gray-50'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
