import { NewsItem, CreatorItem, TopicItem, VideoListItem, ToolItem } from './types';

// Default news data matching the HTML's getDefaultNews()
export const DEFAULT_NEWS_DATA: NewsItem[] = [
    {id:1,type:"tutorial",typeName:"教程",tool:"ChatGPT",title:"ChatGPT自定义指令终极设置：让回答质量提升200%",desc:"通过精心设计的自定义指令，让ChatGPT记住你的偏好，每次回答都更符合你的需求。",isHot:true,icon:"💬",gradient:"linear-gradient(135deg,#10a37f,#047857)",sourceUrl:"https://chat.openai.com/",sourceName:"OpenAI",content:`<h3>什么是自定义指令？</h3><p>自定义指令是ChatGPT的隐藏神器，可以让AI记住你的身份、偏好和期望的回答风格，不用每次都重复说明。</p><h3>如何设置</h3><div class="step"><span class="step-num">1</span><span class="step-text">点击左下角头像，选择「自定义指令」</span></div><div class="step"><span class="step-num">2</span><span class="step-text">在「关于你」中填写你的背景和需求</span></div><div class="step"><span class="step-num">3</span><span class="step-text">在「回复偏好」中设定期望的回答风格</span></div><h3>推荐模板</h3><div class="code-block">关于我：
- 我是一名产品经理，需要经常写文档和分析需求
- 我喜欢简洁直接的回答
- 我使用中文交流

回复偏好：
- 先给结论，再解释原因
- 用列表形式组织信息
- 如果是技术问题，给出可执行的代码</div><div class="tip-box"><h4>💡 专业技巧</h4><p>定期更新自定义指令，让它更贴合你当前的工作需求。</p></div>`},
    {id:2,type:"tip",typeName:"技巧",tool:"Claude",title:"Claude隐藏技巧：Artifacts功能让编程效率飙升",desc:"Claude的Artifacts功能可以实时预览代码效果，边写边看，开发效率大幅提升。",isHot:true,icon:"🤖",gradient:"linear-gradient(135deg,#d97706,#ea580c)",sourceUrl:"https://claude.ai/",sourceName:"Anthropic",content:`<h3>什么是Artifacts</h3><p>Artifacts是Claude独有的功能，可以在对话中创建独立的可视化窗口，实时显示代码、图表、文档等内容。</p><h3>使用方法</h3><ul><li>让Claude生成HTML/CSS/JS代码时，会自动创建预览窗口</li><li>生成图表数据时，会显示可视化图表</li><li>创建文档时，可以直接下载</li></ul><h3>实用场景</h3><ul><li>快速创建网页原型</li><li>生成数据可视化图表</li><li>编写和预览Markdown文档</li></ul><div class="tip-box"><h4>💡 使用技巧</h4><p>说「请创建一个可以预览的代码」，Claude会自动使用Artifacts功能。</p></div>`},
    {id:3,type:"guide",typeName:"指南",tool:"Midjourney",title:"Midjourney V6.1完整参数表：收藏这篇就够用了",desc:"整理了V6.1所有核心参数的用法、推荐值和实例，新手老手都适用。",isHot:false,icon:"🎨",gradient:"linear-gradient(135deg,#6366f1,#8b5cf6)",sourceUrl:"https://midjourney.com/",sourceName:"Midjourney",content:`<h3>基础参数</h3><ul><li><code>--ar 16:9</code> 宽高比（16:9横版/9:16竖版/1:1方形）</li><li><code>--v 6.1</code> 版本号，目前最新6.1</li><li><code>--q 1</code> 质量（.25/.5/1/2）</li><li><code>--s 100</code> 风格化程度（0-1000）</li></ul><h3>进阶参数</h3><ul><li><code>--sref URL</code> 风格参考图片</li><li><code>--cref URL</code> 角色一致性参考</li><li><code>--sw 100</code> 风格权重（0-1000）</li><li><code>--no text</code> 排除某元素</li></ul><h3>推荐组合</h3><div class="code-block">日常出图：--ar 3:4 --s 150 --v 6.1
电影感：--ar 21:9 --s 250 --style raw
人像：--ar 4:5 --s 100</div>`},
    {id:4,type:"update",typeName:"更新",tool:"可灵AI",title:"可灵AI 1.6版本更新：运动控制更精准了",desc:"可灵最新版本优化了运动笔刷功能，现在可以更精确地控制物体运动轨迹。",isHot:true,icon:"🎥",gradient:"linear-gradient(135deg,#ff6b6b,#ee5a24)",sourceUrl:"https://klingai.kuaishou.com/",sourceName:"快手",content:`<h3>1.6版本更新内容</h3><ul><li>运动笔刷精度提升50%</li><li>新增「速度曲线」控制</li><li>支持多物体独立运动</li><li>画质输出提升至2K</li></ul><h3>运动笔刷使用技巧</h3><div class="step"><span class="step-num">1</span><span class="step-text">上传图片后点击「运动笔刷」</span></div><div class="step"><span class="step-num">2</span><span class="step-text">用画笔选中要运动的区域</span></div><div class="step"><span class="step-num">3</span><span class="step-text">拖拽箭头设定运动方向</span></div><div class="step"><span class="step-num">4</span><span class="step-text">调整箭头长度控制速度</span></div><div class="tip-box"><h4>💡 最佳实践</h4><p>先让主体动起来，背景保持静止，效果更自然。</p></div>`},
    {id:5,type:"tip",typeName:"技巧",tool:"Cursor",title:"Cursor这5个快捷键，让编程速度快3倍",desc:"掌握这些核心快捷键，你会发现Cursor比VS Code好用太多了。",isHot:false,icon:"⌨️",gradient:"linear-gradient(135deg,#1e1e1e,#3b3b3b)",sourceUrl:"https://cursor.sh/",sourceName:"Cursor",content:`<h3>必备快捷键</h3><ul><li><code>Cmd+K</code> 选中代码后AI编辑（改写/优化/注释）</li><li><code>Cmd+L</code> 打开AI对话面板</li><li><code>Cmd+I</code> Composer多文件编辑</li><li><code>Tab</code> 接受代码建议</li><li><code>Cmd+Shift+L</code> 添加代码到对话上下文</li></ul><h3>@引用技巧</h3><ul><li><code>@file</code> 引用项目文件</li><li><code>@codebase</code> 让AI理解整个项目</li><li><code>@docs</code> 搜索官方文档</li><li><code>@web</code> 搜索互联网</li></ul><div class="tip-box"><h4>💡 高效组合</h4><p>先<code>@codebase</code>让AI了解项目，再用<code>Cmd+K</code>编辑代码。</p></div>`},
    {id:6,type:"tutorial",typeName:"教程",tool:"Suno",title:"Suno V4完整教程：从零创作一首4分钟歌曲",desc:"手把手教你用Suno V4创作完整歌曲，包括歌词结构、风格描述、后期优化。",isHot:false,icon:"🎵",gradient:"linear-gradient(135deg,#10b981,#059669)",sourceUrl:"https://suno.com/",sourceName:"Suno",content:`<h3>创作流程</h3><div class="step"><span class="step-num">1</span><span class="step-text">选择Custom模式，获得完整控制</span></div><div class="step"><span class="step-num">2</span><span class="step-text">编写结构化歌词</span></div><div class="step"><span class="step-num">3</span><span class="step-text">填写风格描述</span></div><div class="step"><span class="step-num">4</span><span class="step-text">生成并用Extend延长</span></div><h3>歌词模板</h3><div class="code-block">[Intro]
(instrumental)

[Verse 1]
第一段主歌歌词...

[Chorus]
副歌歌词（最抓耳）...

[Verse 2]
第二段主歌...

[Chorus]
副歌重复...

[Outro]
结尾...</div><h3>风格描述示例</h3><p><code>pop, female vocal, emotional, piano, strings, 85bpm</code></p>`},
    {id:7,type:"guide",typeName:"指南",tool:"豆包",title:"豆包AI完全使用指南：这些功能你可能还不知道",desc:"豆包是国内最火的免费AI，但90%的人只用了10%的功能。",isHot:true,icon:"🫘",gradient:"linear-gradient(135deg,#3b82f6,#1d4ed8)",sourceUrl:"https://www.doubao.com/",sourceName:"字节跳动",content:`<h3>核心功能</h3><ul><li><strong>智能对话</strong>：最基础的问答功能</li><li><strong>文档分析</strong>：上传PDF/Word分析内容</li><li><strong>图片理解</strong>：理解图片内容并回答问题</li><li><strong>联网搜索</strong>：获取最新信息</li></ul><h3>隐藏功能</h3><ul><li><strong>智能体</strong>：创建专属AI助手</li><li><strong>长文写作</strong>：生成长篇内容</li><li><strong>代码助手</strong>：编程问题解答</li></ul><h3>使用技巧</h3><ul><li>复杂问题分步骤提问</li><li>上传文档前先说明需求</li><li>对话长了及时开新窗口</li></ul><div class="tip-box"><h4>💡 完全免费</h4><p>豆包对个人用户完全免费，是国内最良心的AI产品之一。</p></div>`},
    {id:8,type:"tip",typeName:"技巧",tool:"Kimi",title:"Kimi处理长文档的正确姿势：这样提问效率翻倍",desc:"Kimi支持200万字上下文，但很多人不会用。掌握这些技巧让分析更高效。",isHot:false,icon:"📚",gradient:"linear-gradient(135deg,#1e1b4b,#4338ca)",sourceUrl:"https://kimi.moonshot.cn/",sourceName:"月之暗面",content:`<h3>上传技巧</h3><ul><li>支持PDF、Word、TXT、网页链接</li><li>一次可上传多个文档对比分析</li><li>网页链接直接粘贴即可</li></ul><h3>高效提问</h3><div class="step"><span class="step-num">1</span><span class="step-text">先让Kimi总结全文要点</span></div><div class="step"><span class="step-num">2</span><span class="step-text">针对具体章节深入提问</span></div><div class="step"><span class="step-num">3</span><span class="step-text">要求引用原文并标注位置</span></div><h3>实用场景</h3><ul><li>论文阅读：快速掌握方法论和结论</li><li>合同审查：找出风险条款</li><li>书籍速读：提取核心观点</li></ul>`},
    {id:9,type:"update",typeName:"更新",tool:"Gemini",title:"Gemini 2.0 Flash免费开放：100万token上下文",desc:"Google最新Gemini 2.0 Flash已在AI Studio免费使用，上下文长度高达100万token。",isHot:true,icon:"✨",gradient:"linear-gradient(135deg,#4285f4,#34a853)",sourceUrl:"https://gemini.google.com/",sourceName:"Google",content:`<h3>2.0 Flash特性</h3><ul><li>100万token超长上下文</li><li>原生多模态（文本+图像+音频）</li><li>推理速度更快</li><li>API完全免费</li></ul><h3>如何使用</h3><div class="step"><span class="step-num">1</span><span class="step-text">访问Google AI Studio</span></div><div class="step"><span class="step-num">2</span><span class="step-text">选择Gemini 2.0 Flash模型</span></div><div class="step"><span class="step-num">3</span><span class="step-text">开始对话或调用API</span></div><h3>适用场景</h3><ul><li>处理超长文档</li><li>分析整个代码仓库</li><li>多文件对比分析</li></ul>`},
    {id:10,type:"tutorial",typeName:"教程",tool:"Stable Diffusion",title:"SD ComfyUI工作流搭建：从入门到自动化",desc:"ComfyUI是目前最强大的SD界面，这篇教你从零搭建自己的工作流。",isHot:false,icon:"🖼️",gradient:"linear-gradient(135deg,#a855f7,#7c3aed)",sourceUrl:"https://github.com/comfyanonymous/ComfyUI",sourceName:"GitHub",content:`<h3>为什么选ComfyUI</h3><ul><li>节点式操作，灵活性极高</li><li>资源占用比WebUI更低</li><li>工作流可保存和分享</li></ul><h3>安装步骤</h3><div class="step"><span class="step-num">1</span><span class="step-text">下载ComfyUI整合包</span></div><div class="step"><span class="step-num">2</span><span class="step-text">解压到纯英文路径</span></div><div class="step"><span class="step-num">3</span><span class="step-text">运行启动脚本</span></div><h3>基础工作流</h3><p>加载模型 → 输入提示词 → KSampler采样 → VAE解码 → 保存图片</p><div class="tip-box"><h4>💡 新手建议</h4><p>先从别人分享的工作流开始学习，不要急于自己搭建。</p></div>`},
];

export const CREATORS_DATA: CreatorItem[] = [
    {name:"影视飓风",platform:"bili",fans:"892万",gradient:"linear-gradient(135deg,#667eea,#764ba2)",url:"https://space.bilibili.com/946974",desc:"专业影视制作团队，AI视频深度测评"},
    {name:"何同学",platform:"bili",fans:"1186万",gradient:"linear-gradient(135deg,#00c9ff,#92fe9d)",url:"https://space.bilibili.com/163637592",desc:"科技数码顶流，AI产品体验"},
    {name:"稚晖君",platform:"bili",fans:"289万",gradient:"linear-gradient(135deg,#11998e,#38ef7d)",url:"https://space.bilibili.com/20259914",desc:"硬核技术大佬，AI机器人开发"},
    {name:"秋葉aaaki",platform:"bili",fans:"68万",gradient:"linear-gradient(135deg,#a855f7,#7c3aed)",url:"https://space.bilibili.com/12566101",desc:"SD整合包作者，AI绘画教程"},
    {name:"Fireship",platform:"youtube",fans:"280万",gradient:"linear-gradient(135deg,#FF0000,#CC0000)",url:"https://www.youtube.com/@Fireship",desc:"编程与AI技术快讲"},
];

export const TOPICS_DATA: TopicItem[] = [
    {name:"ChatGPT教程",icon:"💬",desc:"使用技巧与提示词",platform:"bili",url:"https://search.bilibili.com/all?keyword=ChatGPT%E6%95%99%E7%A8%8B&order=click"},
    {name:"Midjourney绘画",icon:"🎨",desc:"AI绘画从入门到精通",platform:"bili",url:"https://search.bilibili.com/all?keyword=Midjourney%E6%95%99%E7%A8%8B&order=click"},
    {name:"Stable Diffusion",icon:"🖼️",desc:"本地部署与使用",platform:"bili",url:"https://search.bilibili.com/all?keyword=SD%E6%95%99%E7%A8%8B&order=click"},
    {name:"AI视频制作",icon:"🎬",desc:"可灵/Runway/Pika",platform:"bili",url:"https://search.bilibili.com/all?keyword=AI%E8%A7%86%E9%A2%91%E7%94%9F%E6%88%90&order=click"},
    {name:"Cursor编程",icon:"⌨️",desc:"AI编程效率神器",platform:"bili",url:"https://search.bilibili.com/all?keyword=Cursor%E6%95%99%E7%A8%8B&order=click"},
    {name:"Suno音乐",icon:"🎵",desc:"AI音乐创作",platform:"bili",url:"https://search.bilibili.com/all?keyword=Suno%E6%95%99%E7%A8%8B&order=click"},
];

export const VIDEO_LIST_DATA: VideoListItem[] = [
    {title:"2024 AI工具年度盘点",author:"影视飓风",platform:"bili",gradient:"linear-gradient(135deg,#667eea,#764ba2)",url:"https://search.bilibili.com/all?keyword=2024%20AI%E5%B7%A5%E5%85%B7%E7%9B%98%E7%82%B9&order=click"},
    {title:"Sora视频生成完整教程",author:"秋葉aaaki",platform:"bili",gradient:"linear-gradient(135deg,#10a37f,#047857)",url:"https://search.bilibili.com/all?keyword=Sora%E6%95%99%E7%A8%8B&order=click"},
    {title:"Claude vs ChatGPT对比",author:"极客湾Geekerwan",platform:"bili",gradient:"linear-gradient(135deg,#d97706,#ea580c)",url:"https://search.bilibili.com/all?keyword=Claude%20ChatGPT&order=click"},
    {title:"可灵AI视频生成测评",author:"何同学",platform:"bili",gradient:"linear-gradient(135deg,#ff6b6b,#ee5a24)",url:"https://search.bilibili.com/all?keyword=%E5%8F%AF%E7%81%B5AI&order=click"},
];

export const TOOLS_DATA: ToolItem[] = [
    {name:"豆包",cat:"对话",icon:"🫘",bg:"linear-gradient(135deg,#3b82f6,#1d4ed8)",desc:"字节跳动AI，完全免费",url:"https://www.doubao.com/",cn:true,free:true},
    {name:"Kimi",cat:"对话",icon:"🌙",bg:"linear-gradient(135deg,#1e1b4b,#4338ca)",desc:"200万字超长上下文",url:"https://kimi.moonshot.cn/",cn:true,free:true},
    {name:"通义千问",cat:"对话",icon:"🔮",bg:"linear-gradient(135deg,#f97316,#ea580c)",desc:"阿里巴巴AI",url:"https://tongyi.aliyun.com/",cn:true,free:true},
    {name:"文心一言",cat:"对话",icon:"🧠",bg:"linear-gradient(135deg,#2563eb,#1d4ed8)",desc:"百度AI",url:"https://yiyan.baidu.com/",cn:true,free:true},
    {name:"智谱清言",cat:"对话",icon:"🇨🇳",bg:"linear-gradient(135deg,#dc2626,#991b1b)",desc:"GLM-4免费",url:"https://chatglm.cn/",cn:true,free:true},
    {name:"ChatGPT",cat:"对话",icon:"💬",bg:"linear-gradient(135deg,#10a37f,#047857)",desc:"OpenAI出品",url:"https://chat.openai.com/",cn:false},
    {name:"Claude",cat:"对话",icon:"🤖",bg:"linear-gradient(135deg,#d97706,#b45309)",desc:"编程能力强",url:"https://claude.ai/",cn:false},
    {name:"Gemini",cat:"对话",icon:"✨",bg:"linear-gradient(135deg,#4285f4,#ea4335)",desc:"Google AI",url:"https://gemini.google.com/",cn:false},
    {name:"即梦AI",cat:"绘画",icon:"💭",bg:"linear-gradient(135deg,#8b5cf6,#6d28d9)",desc:"字节跳动绘画",url:"https://jimeng.jianying.com/",cn:true,free:true},
    {name:"Midjourney",cat:"绘画",icon:"🎨",bg:"linear-gradient(135deg,#6366f1,#8b5cf6)",desc:"顶级AI绘画",url:"https://midjourney.com/",cn:false},
    {name:"Leonardo",cat:"绘画",icon:"🎮",bg:"linear-gradient(135deg,#8b5cf6,#6d28d9)",desc:"每天200免费",url:"https://leonardo.ai/",cn:false},
    {name:"可灵AI",cat:"视频",icon:"🎥",bg:"linear-gradient(135deg,#ff6b6b,#ee5a24)",desc:"快手视频生成",url:"https://klingai.kuaishou.com/",cn:true,free:true},
    {name:"Runway",cat:"视频",icon:"🎬",bg:"linear-gradient(135deg,#f97316,#ea580c)",desc:"最强AI视频",url:"https://runwayml.com/",cn:false},
    {name:"Suno",cat:"音频",icon:"🎵",bg:"linear-gradient(135deg,#10b981,#059669)",desc:"AI音乐生成",url:"https://suno.com/",cn:false},
    {name:"ElevenLabs",cat:"音频",icon:"🔊",bg:"linear-gradient(135deg,#3b82f6,#1d4ed8)",desc:"语音克隆",url:"https://elevenlabs.io/",cn:false},
    {name:"Cursor",cat:"编程",icon:"⌨️",bg:"linear-gradient(135deg,#1e1e1e,#333)",desc:"AI编程IDE",url:"https://cursor.sh/",cn:false},
    {name:"通义灵码",cat:"编程",icon:"💻",bg:"linear-gradient(135deg,#f97316,#ea580c)",desc:"阿里编程助手",url:"https://tongyi.aliyun.com/lingma",cn:true,free:true},
    {name:"Notion AI",cat:"效率",icon:"📝",bg:"linear-gradient(135deg,#000,#262626)",desc:"写作效率",url:"https://notion.so/",cn:false},
    {name:"Gamma",cat:"效率",icon:"📊",bg:"linear-gradient(135deg,#a855f7,#7c3aed)",desc:"AI做PPT",url:"https://gamma.app/",cn:false},
    {name:"Perplexity",cat:"搜索",icon:"🔍",bg:"linear-gradient(135deg,#06b6d4,#0284c7)",desc:"AI搜索",url:"https://perplexity.ai/",cn:false},
];