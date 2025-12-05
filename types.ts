export interface NewsItem {
  id: number;
  type: string; // 'tutorial' | 'tip' | 'update' | 'guide' | 'news'
  typeName: string;
  tool: string;
  title: string;
  desc: string;
  isHot?: boolean;
  icon: string;
  gradient: string;
  sourceUrl: string;
  sourceName: string;
  content: string;
}

export type Platform = 'bili' | 'douyin' | 'xhs' | 'youtube' | 'twitter';

export interface CreatorItem {
  name: string;
  platform: Platform;
  fans: string;
  gradient: string;
  url: string;
  desc?: string;
}

export interface TopicItem {
  name: string;
  icon: string;
  desc: string;
  platform: Platform;
  url: string;
}

export interface VideoListItem {
  title: string;
  author: string;
  platform: Platform;
  gradient: string;
  url: string;
}

export interface ToolItem {
  name: string;
  cat: string;
  icon: string;
  bg: string;
  desc: string;
  url: string;
  cn?: boolean;
  free?: boolean;
}