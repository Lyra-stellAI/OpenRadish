// ===== SAMPLE DATA FOR OPENHUB =====

const COMMUNITIES = {
  machinelearning: {
    name: "h/MachineLearning",
    icon: "fa-brain",
    tagline: "Discuss the latest in machine learning",
    description: "A community for machine learning practitioners and researchers. Share papers, projects, news, and ask questions about ML techniques, tools, and theory.",
    members: "24.5k",
    online: "1.2k",
    created: "Jan 15, 2026",
    color: "#0079d3",
    rules: [
      "Stay on topic — ML related content only",
      "Be respectful and constructive",
      "Cite sources for research claims",
      "No low-effort or duplicate posts",
      "Use appropriate flairs"
    ],
    mods: ["ai_researcher", "ml_engineer", "deep_learner"]
  },
  llms: {
    name: "h/LLMs",
    icon: "fa-robot",
    tagline: "Large Language Models — news, research & discussion",
    description: "Everything about Large Language Models. Discuss GPT, Claude, Llama, Gemini, and more. Share benchmarks, prompts, fine-tuning tips, and architectural insights.",
    members: "89.3k",
    online: "5.4k",
    created: "Feb 3, 2026",
    color: "#6c5ce7",
    rules: [
      "No AI-generated spam",
      "Benchmark claims must include methodology",
      "Be respectful in model comparisons",
      "No promotional content without disclosure"
    ],
    mods: ["llm_watcher", "prompt_engineer"]
  },
  computervision: {
    name: "h/ComputerVision",
    icon: "fa-eye",
    tagline: "See the world through AI eyes",
    description: "Computer vision research, applications, and discussion. From image classification to 3D reconstruction, discuss it all here.",
    members: "12.1k",
    online: "430",
    created: "Jan 28, 2026",
    color: "#e84393",
    rules: ["Stay on topic", "Share datasets responsibly", "Credit original authors"],
    mods: ["vision_pro", "pixel_guru"]
  },
  nlp: {
    name: "h/NLP",
    icon: "fa-language",
    tagline: "Natural Language Processing community",
    description: "A hub for NLP enthusiasts. Discuss tokenization, transformers, sentiment analysis, NER, and all things language.",
    members: "15.7k",
    online: "620",
    created: "Feb 10, 2026",
    color: "#00b894",
    rules: ["Be helpful", "Cite papers", "No homework dumps"],
    mods: ["nlp_nerd", "tokenizer"]
  },
  ethics: {
    name: "h/AIethics",
    icon: "fa-scale-balanced",
    tagline: "Exploring the ethics of artificial intelligence",
    description: "Discuss AI safety, bias, alignment, regulation, and the social impact of AI systems. Thoughtful discourse encouraged.",
    members: "18.9k",
    online: "780",
    created: "Jan 20, 2026",
    color: "#fdcb6e",
    rules: ["Argue in good faith", "No personal attacks", "Cite sources", "Respect diverse perspectives"],
    mods: ["ethicist_ai", "safety_first"]
  },
  opensource: {
    name: "h/OpenSource",
    icon: "fa-code-branch",
    tagline: "Open source AI projects and tools",
    description: "Share and discover open source AI projects. From frameworks to models to datasets — if it's open, it belongs here.",
    members: "31.2k",
    online: "2.1k",
    created: "Jan 18, 2026",
    color: "#00cec9",
    rules: ["Link to repos", "Include licenses", "Be constructive in code reviews"],
    mods: ["oss_advocate", "git_master"]
  },
  research: {
    name: "h/AIResearch",
    icon: "fa-flask",
    tagline: "Cutting-edge AI research papers and discussion",
    description: "Dive deep into AI research. Share papers, discuss methodologies, and debate findings. All areas of AI research welcome.",
    members: "42.8k",
    online: "3.2k",
    created: "Jan 12, 2026",
    color: "#a29bfe",
    rules: ["Link to the paper", "Provide a TL;DR summary", "Constructive criticism only", "No plagiarism"],
    mods: ["paper_reader", "phd_student", "research_lead"]
  },
  beginners: {
    name: "h/Beginners",
    icon: "fa-graduation-cap",
    tagline: "No question is too basic",
    description: "New to AI? Welcome! Ask any question, share your learning journey, and get guidance from the community. We were all beginners once.",
    members: "56.4k",
    online: "4.8k",
    created: "Jan 10, 2026",
    color: "#fd79a8",
    rules: ["Be patient and kind", "No gatekeeping", "Search before posting", "Help each other learn"],
    mods: ["helpful_human", "teach_ai"]
  }
};

const USERS = [
  "neural_ninja", "gradient_guru", "tensor_titan", "backprop_betty",
  "data_dave", "model_mary", "epoch_ed", "loss_lucy",
  "kernel_kate", "relu_rick", "softmax_sam", "dropout_dan",
  "attention_alice", "transformer_tom", "cnn_charlie", "gan_grace",
  "bert_bob", "llama_lisa", "diffusion_diana", "rl_robert"
];

const SAMPLE_POSTS = [
  {
    id: 1,
    community: "h/LLMs",
    communityKey: "llms",
    author: "transformer_tom",
    title: "Claude 4.6 Opus just dropped — here are my benchmark results",
    body: "I've been running comprehensive benchmarks on the new Claude 4.6 Opus model across coding, reasoning, and creative tasks. The results are remarkable — significant improvements in multi-step reasoning and tool use. Here's my full breakdown with methodology and raw numbers.\n\nKey findings:\n- 23% improvement on HumanEval coding benchmarks\n- Near-perfect scores on graduate-level reasoning tasks\n- Substantially better at following complex, multi-part instructions\n- Improved context window utilization\n\nI'll be publishing the full dataset on GitHub later this week.",
    tags: ["benchmarks", "claude", "llm-evaluation"],
    upvotes: 1847,
    comments: 342,
    time: "3 hours ago",
    pinned: false
  },
  {
    id: 2,
    community: "h/MachineLearning",
    communityKey: "machinelearning",
    author: "gradient_guru",
    title: "I trained a model to detect wildfires from satellite imagery with 97.3% accuracy",
    body: "After 8 months of work, my team and I developed a real-time wildfire detection system using satellite imagery. We combined a custom EfficientNet backbone with temporal attention modules to analyze multi-spectral satellite data.\n\nThe model processes images from Sentinel-2 and GOES-16 satellites and can detect fires within 15 minutes of ignition. We've open-sourced the model and training pipeline.\n\nDataset: 2.3M annotated images across 6 continents\nInference time: 47ms per image on A100\nFalse positive rate: 0.4%",
    tags: ["computer-vision", "satellite", "open-source", "climate"],
    upvotes: 2341,
    comments: 187,
    time: "5 hours ago",
    pinned: false
  },
  {
    id: 3,
    community: "h/AIethics",
    communityKey: "ethics",
    author: "ethicist_ai",
    title: "The EU AI Act enforcement begins next month — what developers need to know",
    body: "With enforcement of the EU AI Act starting in April 2026, many developers are scrambling to understand compliance requirements. Here's a comprehensive summary of what applies to different risk tiers and what actions you should be taking now.\n\nHigh-risk AI systems will need:\n- Conformity assessments before deployment\n- Technical documentation and risk management systems\n- Data governance and transparency requirements\n- Human oversight mechanisms\n\nI've compiled a compliance checklist for startups and independent developers.",
    tags: ["regulation", "eu-ai-act", "compliance"],
    upvotes: 956,
    comments: 234,
    time: "7 hours ago",
    pinned: false
  },
  {
    id: 4,
    community: "h/OpenSource",
    communityKey: "opensource",
    author: "oss_advocate",
    title: "We just released a fully open-source alternative to Midjourney — Apache 2.0 licensed",
    body: "After a year of development, our team is proud to release PixelForge v1.0 — a fully open-source image generation model that rivals commercial offerings.\n\nHighlights:\n- 12B parameter diffusion transformer model\n- Trained on 4B curated, licensed images\n- Apache 2.0 license — use it for anything\n- Runs on consumer GPUs (RTX 4070+ recommended)\n- LoRA fine-tuning support out of the box\n- ComfyUI and Automatic1111 compatible\n\nGitHub repo, model weights, and documentation are all live now.",
    tags: ["image-generation", "open-source", "diffusion", "release"],
    upvotes: 4521,
    comments: 567,
    time: "10 hours ago",
    pinned: false
  },
  {
    id: 5,
    community: "h/AIResearch",
    communityKey: "research",
    author: "paper_reader",
    title: "[Paper] Attention Is All You Need Was Wrong: Hybrid Architectures Outperform Pure Transformers",
    body: "A fascinating new paper from DeepMind challenges the transformer-only paradigm. They introduce HybridFormer, an architecture that combines state-space models with sparse attention mechanisms.\n\nKey results:\n- 15% better perplexity on language modeling tasks\n- 40% reduction in compute at inference time\n- Scales better to 1M+ token contexts\n- Maintains strong performance on short-context tasks\n\nThe paper makes a compelling argument that the field may have prematurely abandoned architectural diversity. What are your thoughts?",
    tags: ["paper", "architecture", "transformers", "state-space-models"],
    upvotes: 1234,
    comments: 445,
    time: "12 hours ago",
    pinned: false
  },
  {
    id: 6,
    community: "h/Beginners",
    communityKey: "beginners",
    author: "helpful_human",
    title: "The absolute beginner's roadmap to learning AI/ML in 2026 — updated guide",
    body: "I've updated my popular beginner's guide for 2026. Here's a structured path from zero to deploying your first ML model:\n\n1. Python fundamentals (2-3 weeks)\n2. Math foundations: linear algebra & probability (3-4 weeks)\n3. Core ML concepts with scikit-learn (3-4 weeks)\n4. Deep learning with PyTorch (4-6 weeks)\n5. Transformers and NLP basics (3-4 weeks)\n6. Build & deploy a real project (2-3 weeks)\n\nEach section includes free resources, recommended courses, and practice exercises. Total time: ~4-5 months at 10-15 hours per week.\n\nI've also added an optional 'advanced track' covering MLOps, LLM fine-tuning, and agent architectures.",
    tags: ["beginner", "roadmap", "learning", "guide"],
    upvotes: 3876,
    comments: 289,
    time: "14 hours ago",
    pinned: true
  },
  {
    id: 7,
    community: "h/LLMs",
    communityKey: "llms",
    author: "prompt_engineer",
    title: "I built an agent that autonomously debugs and fixes production code — here's what I learned",
    body: "Over the past month, I've been running an autonomous coding agent in our production environment. It monitors error logs, identifies root causes, writes fixes, runs tests, and creates PRs — all without human intervention.\n\nSurprising findings:\n- It correctly fixed 73% of bugs on the first attempt\n- Average time from error detection to PR: 4 minutes\n- The remaining 27% were mostly architectural issues requiring human judgment\n- It saved our team roughly 20 hours per week\n\nI'll share the architecture, prompt engineering lessons, and failure modes.",
    tags: ["agents", "coding", "automation", "production"],
    upvotes: 2156,
    comments: 398,
    time: "16 hours ago",
    pinned: false
  },
  {
    id: 8,
    community: "h/NLP",
    communityKey: "nlp",
    author: "tokenizer",
    title: "New tokenization method reduces token count by 35% for non-English languages",
    body: "A major pain point in NLP has been the inefficiency of tokenizers for non-English languages. Our new approach, MultiLex, uses language-aware byte-pair encoding with morphological hints.\n\nResults across 47 languages:\n- Average 35% reduction in token count\n- 12% improvement in downstream task performance\n- Minimal regression on English benchmarks\n- Works as a drop-in replacement for existing tokenizers\n\nThis has huge implications for cost and quality when serving multilingual LLMs.",
    tags: ["tokenization", "multilingual", "efficiency"],
    upvotes: 876,
    comments: 124,
    time: "18 hours ago",
    pinned: false
  },
  {
    id: 9,
    community: "h/ComputerVision",
    communityKey: "computervision",
    author: "vision_pro",
    title: "Real-time 3D scene reconstruction from a single phone camera — demo inside",
    body: "We've achieved real-time 3D scene reconstruction using just a standard smartphone camera. The model uses a novel neural radiance field approach optimized for mobile hardware.\n\nSpecs:\n- 30 FPS on iPhone 15 Pro\n- Generates textured 3D meshes in under 5 seconds\n- Works indoors and outdoors\n- Export to common 3D formats (OBJ, GLTF)\n\nThis opens up huge possibilities for AR, gaming, and digital twins. Demo video and APK are linked in the comments.",
    tags: ["3d-reconstruction", "mobile", "nerf", "demo"],
    upvotes: 1543,
    comments: 201,
    time: "20 hours ago",
    pinned: false
  },
  {
    id: 10,
    community: "h/MachineLearning",
    communityKey: "machinelearning",
    author: "data_dave",
    title: "PSA: Your data preprocessing pipeline is probably leaking information — here's how to check",
    body: "I've been auditing ML pipelines at various companies and the #1 issue I find is data leakage in preprocessing. Here are the most common mistakes:\n\n1. Fitting scalers/encoders on the full dataset before splitting\n2. Using future data in time-series feature engineering\n3. Target leakage through correlated proxy features\n4. Leakage in cross-validation folds\n\nI've written a Python library called LeakCheck that automatically detects these issues. Just pip install leakcheck and run it on your pipeline.",
    tags: ["data-science", "best-practices", "tools", "data-leakage"],
    upvotes: 1089,
    comments: 156,
    time: "22 hours ago",
    pinned: false
  }
];

const SAMPLE_COMMENTS = [
  {
    id: 1,
    author: "neural_ninja",
    body: "This is incredible work! I've been waiting for something like this. Have you considered running it against the new MMLU-Pro benchmark as well?",
    upvotes: 234,
    time: "2 hours ago",
    replies: [
      {
        id: 2,
        author: "transformer_tom",
        body: "Great suggestion! I actually just finished those runs. Results look even more impressive — will update the post tomorrow.",
        upvotes: 156,
        time: "1 hour ago",
        replies: []
      }
    ]
  },
  {
    id: 3,
    author: "backprop_betty",
    body: "Can you share more about your evaluation methodology? I've seen a lot of benchmarks lately that don't account for contamination properly.",
    upvotes: 189,
    time: "2 hours ago",
    replies: [
      {
        id: 4,
        author: "transformer_tom",
        body: "Absolutely valid concern. I used held-out test sets that were generated after the model's training cutoff. Full methodology doc is linked in the post.",
        upvotes: 98,
        time: "1 hour ago",
        replies: []
      }
    ]
  },
  {
    id: 5,
    author: "relu_rick",
    body: "The multi-step reasoning improvements are what excite me the most. I've been using it for complex code refactoring and the difference is night and day.",
    upvotes: 145,
    time: "1 hour ago",
    replies: []
  },
  {
    id: 6,
    author: "attention_alice",
    body: "How does this compare to Gemini 2.5? I've been going back and forth between the two.",
    upvotes: 87,
    time: "45 minutes ago",
    replies: [
      {
        id: 7,
        author: "model_mary",
        body: "Different strengths honestly. Claude is better at nuanced reasoning and following complex instructions. Gemini is better at multimodal tasks and has a larger context window.",
        upvotes: 112,
        time: "30 minutes ago",
        replies: []
      }
    ]
  }
];

const TRENDING = [
  { community: "h/LLMs", title: "Claude 4.6 Opus benchmark results", upvotes: "1.8k" },
  { community: "h/OpenSource", title: "PixelForge v1.0 released", upvotes: "4.5k" },
  { community: "h/Beginners", title: "2026 AI/ML learning roadmap", upvotes: "3.9k" },
  { community: "h/MachineLearning", title: "Wildfire detection from satellite imagery", upvotes: "2.3k" },
  { community: "h/AIResearch", title: "HybridFormer challenges transformer paradigm", upvotes: "1.2k" }
];

// ===== NEWS & INTERVIEW DATA =====

const NEWS_ITEMS = [
  {
    id: 1,
    type: "interview",
    title: "Ilya Sutskever on the Future of AI Safety and Superintelligence",
    source: "Lex Fridman Podcast",
    author: "Lex Fridman",
    url: "https://www.youtube.com/watch?v=example1",
    thumbnail: "",
    date: "Mar 10, 2026",
    category: "interview",
    summary: "In this landmark 3-hour interview, Ilya Sutskever discusses his departure from OpenAI, the founding of Safe Superintelligence Inc (SSI), and his vision for building safe superintelligent systems. Key topics include: why he believes alignment is a solvable problem, the importance of interpretability research, his thoughts on scaling laws reaching their limits, and why he thinks the next breakthrough will come from fundamentally new architectures rather than simply scaling transformers. Sutskever also shares his personal philosophy on the responsibility of AI researchers and why he chose safety over capability.",
    tags: ["ilya-sutskever", "ai-safety", "superintelligence", "interview"],
    upvotes: 3421,
    commentCount: 567,
    comments: [
      { id: 101, author: "neural_ninja", body: "The part where Ilya discusses why scaling alone won't get us to AGI is fascinating. It aligns with what we've been seeing in practice — diminishing returns on pure scaling.", upvotes: 234, time: "2 hours ago" },
      { id: 102, author: "safety_first", body: "His point about alignment being 'solvable but not easy' really resonated with me. It's the nuanced optimism we need in the field.", upvotes: 189, time: "1 hour ago" },
      { id: 103, author: "transformer_tom", body: "I disagree with his take on transformers hitting their ceiling. The HybridFormer results suggest we haven't fully explored the design space yet.", upvotes: 145, time: "45 min ago" }
    ]
  },
  {
    id: 2,
    type: "interview",
    title: "Dario Amodei (Anthropic CEO) — Building Claude and the Race for Responsible AI",
    source: "Bloomberg Technology",
    author: "Emily Chang",
    url: "https://www.youtube.com/watch?v=example2",
    thumbnail: "",
    date: "Mar 8, 2026",
    category: "interview",
    summary: "Anthropic CEO Dario Amodei sits down for an in-depth conversation about Claude's rapid evolution, Anthropic's constitutional AI approach, and how the company balances commercial growth with safety commitments. Amodei reveals details about Claude 4.6's development process, discusses the internal debate around capability vs. safety investments, and shares his framework for thinking about AI risk timelines. He also addresses competition with OpenAI and Google, Anthropic's unique corporate structure, and why he believes the 'race to the bottom' narrative is overblown.",
    tags: ["dario-amodei", "anthropic", "claude", "responsible-ai"],
    upvotes: 2876,
    commentCount: 423,
    comments: [
      { id: 104, author: "model_mary", body: "The constitutional AI section was the highlight for me. It's a fundamentally different approach to alignment than RLHF and I think it's underappreciated.", upvotes: 198, time: "3 hours ago" },
      { id: 105, author: "ethicist_ai", body: "Really appreciate the transparency about internal capability vs. safety debates. More companies should be this open.", upvotes: 156, time: "2 hours ago" }
    ]
  },
  {
    id: 3,
    type: "interview",
    title: "Sam Altman on GPT-5, AGI Timelines, and OpenAI's New Direction",
    source: "The Verge",
    author: "Nilay Patel",
    url: "https://www.youtube.com/watch?v=example3",
    thumbnail: "",
    date: "Mar 5, 2026",
    category: "interview",
    summary: "OpenAI CEO Sam Altman gives a wide-ranging interview covering GPT-5 development, revised AGI timelines, and OpenAI's transition from a capped-profit to a fully commercial entity. Altman discusses the technical challenges encountered during GPT-5 training, why OpenAI's approach to multimodality differs from competitors, the Stargate data center project with Microsoft, and his evolving views on open-source AI. He also addresses recent controversies around board governance and the departure of key safety researchers.",
    tags: ["sam-altman", "openai", "gpt-5", "agi"],
    upvotes: 2145,
    commentCount: 612,
    comments: [
      { id: 106, author: "llm_watcher", body: "His comments on AGI timelines seem much more measured than a year ago. The 'it's harder than we thought' admission is telling.", upvotes: 267, time: "4 hours ago" },
      { id: 107, author: "backprop_betty", body: "The open-source discussion was disappointing. Still no concrete commitments to releasing model weights.", upvotes: 198, time: "3 hours ago" },
      { id: 108, author: "oss_advocate", body: "The Stargate project details were new info though. 100GW of compute is mind-boggling.", upvotes: 134, time: "2 hours ago" }
    ]
  },
  {
    id: 4,
    type: "news",
    title: "Google DeepMind Announces Gemini Ultra 2.0 with Native Tool Use and 2M Token Context",
    source: "TechCrunch",
    author: "Kyle Wiggers",
    url: "https://techcrunch.com/example4",
    date: "Mar 12, 2026",
    category: "product",
    summary: "Google DeepMind has unveiled Gemini Ultra 2.0, featuring a 2 million token context window, native tool-use capabilities, and what they claim is state-of-the-art performance across 43 benchmarks. The model introduces 'native actions' — the ability to directly interact with Google services, execute code, browse the web, and manage files without external orchestration. DeepMind also announced a new pricing tier aimed at enterprise customers and a partnership with SAP for enterprise AI integration.",
    tags: ["google", "gemini", "product-launch", "llm"],
    upvotes: 1987,
    commentCount: 345,
    comments: [
      { id: 109, author: "prompt_engineer", body: "The native tool use is a big deal if it actually works reliably. The current function calling approach feels clunky.", upvotes: 178, time: "5 hours ago" },
      { id: 110, author: "attention_alice", body: "2M context is impressive but I want to see the 'needle in a haystack' results at that length.", upvotes: 145, time: "4 hours ago" }
    ]
  },
  {
    id: 5,
    type: "news",
    title: "Meta Releases Llama 4 — Fully Open-Source 400B Parameter Model Under Apache 2.0",
    source: "Meta AI Blog",
    author: "Meta AI Team",
    url: "https://ai.meta.com/blog/llama-4",
    date: "Mar 11, 2026",
    category: "breaking",
    summary: "Meta has released Llama 4, a 400 billion parameter language model under the Apache 2.0 license — the most permissive license ever used for a frontier model. The release includes full model weights, training code, and a dataset card. Llama 4 features a mixture-of-experts architecture with 64 experts, supports 128k context natively, and includes built-in vision and audio capabilities. Early benchmarks show competitive performance with GPT-4 class models. Meta claims the model was trained on 15 trillion tokens of 'responsibly sourced' data.",
    tags: ["meta", "llama", "open-source", "breaking"],
    upvotes: 5432,
    commentCount: 789,
    comments: [
      { id: 111, author: "oss_advocate", body: "Apache 2.0 for a 400B model! This is a watershed moment for open-source AI. No more 'open-ish' licenses.", upvotes: 456, time: "6 hours ago" },
      { id: 112, author: "gradient_guru", body: "The MoE architecture details are fascinating. 64 experts with top-4 routing — that's a massive efficiency gain.", upvotes: 289, time: "5 hours ago" },
      { id: 113, author: "data_dave", body: "I want to know more about the 'responsibly sourced' training data. The data card is vague on this.", upvotes: 234, time: "4 hours ago" }
    ]
  },
  {
    id: 6,
    type: "interview",
    title: "Demis Hassabis — AlphaFold 3, Nobel Prize, and the Future of Scientific AI",
    source: "Lex Fridman Podcast",
    author: "Lex Fridman",
    url: "https://www.youtube.com/watch?v=example6",
    thumbnail: "",
    date: "Mar 3, 2026",
    category: "interview",
    summary: "Nobel laureate and Google DeepMind CEO Demis Hassabis discusses the impact of AlphaFold 3 on drug discovery, his experience receiving the Nobel Prize in Chemistry, and his vision for AI-driven scientific breakthroughs. Topics include: the next frontiers for AI in science (materials science, climate modeling, mathematics), why he believes AI will produce multiple Nobel-worthy discoveries in the next decade, the organizational challenges of running a 3,000-person research lab, and the balance between fundamental research and product development at DeepMind.",
    tags: ["demis-hassabis", "deepmind", "alphafold", "scientific-ai"],
    upvotes: 2654,
    commentCount: 312,
    comments: [
      { id: 114, author: "research_lead", body: "The materials science section was eye-opening. If AI can crack room-temperature superconductors, it would change everything.", upvotes: 198, time: "3 hours ago" },
      { id: 115, author: "phd_student", body: "His perspective on running DeepMind as both a research lab and a product org is really honest. The tension is real.", upvotes: 145, time: "2 hours ago" }
    ]
  },
  {
    id: 7,
    type: "news",
    title: "EU AI Act Enforcement Begins April 1 — Major Fines for Non-Compliance",
    source: "Reuters",
    author: "Foo Yun Chee",
    url: "https://reuters.com/example7",
    date: "Mar 9, 2026",
    category: "policy",
    summary: "The European Union's AI Act enters its enforcement phase on April 1, 2026, with fines of up to 7% of global annual revenue for violations. The first enforcement actions will target prohibited AI practices including social scoring, real-time biometric surveillance, and manipulative AI systems. Companies deploying high-risk AI systems in healthcare, education, employment, and critical infrastructure must demonstrate compliance with technical standards, risk assessments, and transparency requirements. The EU AI Office has appointed 150 inspectors across member states.",
    tags: ["eu-ai-act", "regulation", "policy", "compliance"],
    upvotes: 1567,
    commentCount: 456,
    comments: [
      { id: 116, author: "ethicist_ai", body: "7% of global revenue is no joke. This will force even the biggest companies to take compliance seriously.", upvotes: 234, time: "5 hours ago" },
      { id: 117, author: "kernel_kate", body: "I'm concerned about the impact on startups. Compliance costs could be prohibitive for smaller companies.", upvotes: 189, time: "4 hours ago" }
    ]
  },
  {
    id: 8,
    type: "interview",
    title: "Yann LeCun — Why Autoregressive LLMs Are a Dead End and What Comes Next",
    source: "Machine Learning Street Talk",
    author: "Tim Scarfe",
    url: "https://www.youtube.com/watch?v=example8",
    thumbnail: "",
    date: "Feb 28, 2026",
    category: "interview",
    summary: "Meta's Chief AI Scientist Yann LeCun delivers his most detailed critique yet of autoregressive language models and presents his vision for 'world models' — AI systems that build internal representations of reality through self-supervised learning on video and sensory data. LeCun explains his Joint Embedding Predictive Architecture (JEPA), discusses why he believes current LLMs will never achieve true understanding, and argues that the path to human-level AI requires fundamentally different approaches to learning. He also engages with criticisms of his position and discusses the philosophical implications of machine understanding.",
    tags: ["yann-lecun", "world-models", "jepa", "autoregressive"],
    upvotes: 1876,
    commentCount: 534,
    comments: [
      { id: 118, author: "transformer_tom", body: "I respect LeCun enormously but his 'dead end' take has been wrong for 3 years running. LLMs keep improving.", upvotes: 267, time: "6 hours ago" },
      { id: 119, author: "relu_rick", body: "The JEPA work is genuinely interesting though. There might be truth to the idea that text-only models miss something fundamental.", upvotes: 198, time: "5 hours ago" },
      { id: 120, author: "diffusion_diana", body: "The video understanding demos were incredible. If V-JEPA scales, it could be transformative.", upvotes: 156, time: "4 hours ago" }
    ]
  },
  {
    id: 9,
    type: "news",
    title: "NVIDIA Announces Blackwell Ultra B300 — 2x Performance for AI Training and Inference",
    source: "Wired",
    author: "Will Knight",
    url: "https://wired.com/example9",
    date: "Mar 7, 2026",
    category: "industry",
    summary: "NVIDIA has unveiled the Blackwell Ultra B300 GPU at GTC 2026, claiming 2x the AI training performance and 3x the inference throughput compared to the B200. The B300 features 288GB of HBM4 memory, a new NVLink 6.0 interconnect supporting 3.6 TB/s bandwidth between GPUs, and dedicated hardware for mixture-of-experts inference. Jensen Huang also announced partnerships with every major cloud provider and revealed that NVIDIA's DGX Cloud now serves over 10,000 enterprise customers. The B300 is expected to ship in Q3 2026 starting at $40,000 per unit.",
    tags: ["nvidia", "hardware", "gpu", "blackwell"],
    upvotes: 1432,
    commentCount: 278,
    comments: [
      { id: 121, author: "kernel_kate", body: "$40k per unit — the AI tax continues. At least HBM4 should help with the memory bottleneck.", upvotes: 189, time: "4 hours ago" },
      { id: 122, author: "epoch_ed", body: "The dedicated MoE inference hardware is the real story here. This is going to dramatically reduce serving costs.", upvotes: 156, time: "3 hours ago" }
    ]
  },
  {
    id: 10,
    type: "interview",
    title: "Andrej Karpathy — Teaching AI to Code, Tesla's Autopilot Lessons, and Why He Left OpenAI Again",
    source: "No Priors Podcast",
    author: "Sarah Guo & Elad Gil",
    url: "https://www.youtube.com/watch?v=example10",
    thumbnail: "",
    date: "Mar 1, 2026",
    category: "interview",
    summary: "Andrej Karpathy discusses his latest venture building AI-native education tools, reflects on his time leading Tesla's Autopilot team, and explains his reasons for leaving OpenAI a second time. Karpathy shares insights on what makes AI coding assistants work (and fail), why he believes 'AI tutors' will democratize expert-level education, and his framework for evaluating whether AI systems truly 'understand' code versus pattern matching. He also gives practical advice for engineers transitioning into AI/ML careers and shares his current daily workflow using AI tools.",
    tags: ["andrej-karpathy", "coding", "education", "tesla"],
    upvotes: 2234,
    commentCount: 389,
    comments: [
      { id: 123, author: "gradient_guru", body: "His perspective on AI coding tools from actually building Autopilot is invaluable. Real-world experience > benchmarks.", upvotes: 234, time: "5 hours ago" },
      { id: 124, author: "helpful_human", body: "The education section is a must-watch for anyone in the AI learning space. His ideas about adaptive tutoring are compelling.", upvotes: 189, time: "4 hours ago" }
    ]
  },
  {
    id: 11,
    type: "news",
    title: "Anthropic Launches Claude Enterprise with SOC 2 Type II and HIPAA Compliance",
    source: "MIT Technology Review",
    author: "James O'Donnell",
    url: "https://technologyreview.com/example11",
    date: "Mar 6, 2026",
    category: "product",
    summary: "Anthropic has launched Claude Enterprise, a new tier designed for regulated industries including healthcare, finance, and government. The offering includes SOC 2 Type II certification, HIPAA compliance, on-premise deployment options, custom model fine-tuning, and dedicated infrastructure with guaranteed uptime SLAs. Claude Enterprise also introduces 'Controlled Generation' — a feature that constrains model outputs to comply with organization-specific policies and regulatory requirements. Initial customers include three Fortune 500 companies and two federal agencies.",
    tags: ["anthropic", "claude", "enterprise", "compliance"],
    upvotes: 1654,
    commentCount: 234,
    comments: [
      { id: 125, author: "data_dave", body: "HIPAA compliance is huge. Healthcare has been stuck using decade-old NLP tools because nothing modern was compliant.", upvotes: 198, time: "4 hours ago" },
      { id: 126, author: "model_mary", body: "Controlled Generation could be a game-changer for financial services. Being able to guarantee no hallucinated numbers in reports is critical.", upvotes: 167, time: "3 hours ago" }
    ]
  },
  {
    id: 12,
    type: "news",
    title: "China's DeepSeek Releases R2 Reasoning Model — Claims to Match o3 at 1/10th the Cost",
    source: "The Information",
    author: "Jing Yang",
    url: "https://theinformation.com/example12",
    date: "Mar 4, 2026",
    category: "breaking",
    summary: "Chinese AI lab DeepSeek has released R2, an open-weight reasoning model that they claim matches OpenAI's o3 on mathematical reasoning and coding benchmarks at roughly one-tenth the inference cost. R2 uses a novel 'recursive verification' architecture where the model checks its own reasoning steps before proceeding. The model is available in 70B and 670B parameter versions under a permissive license. Independent evaluations are still pending, but early community benchmarks suggest the claims are largely accurate. The release has reignited debate about the US-China AI competition.",
    tags: ["deepseek", "reasoning", "open-source", "china"],
    upvotes: 3876,
    commentCount: 678,
    comments: [
      { id: 127, author: "llm_watcher", body: "If the independent benchmarks confirm these results, this is a massive shift. Cost-efficiency matters more than raw capability for most use cases.", upvotes: 345, time: "5 hours ago" },
      { id: 128, author: "attention_alice", body: "The recursive verification approach is really clever. Essentially building chain-of-thought verification into the architecture itself.", upvotes: 267, time: "4 hours ago" }
    ]
  }
];

// ===== KNOWLEDGE / PAPERS DATA =====

const PAPERS = [
  {
    id: 1,
    title: "Scaling Monosemanticity: Extracting Interpretable Features from Claude 4",
    authors: ["Adly Templeton", "Tom Conerly", "Chris Olah", "et al."],
    venue: "NeurIPS",
    year: 2026,
    url: "https://arxiv.org/abs/example-paper-1",
    date: "Mar 11, 2026",
    area: "safety",
    spotlight: true,
    abstract: "We extend sparse autoencoder-based interpretability methods to Claude 4-class models, successfully extracting over 10 million interpretable features. We demonstrate that these features correspond to human-understandable concepts and can be used to precisely steer model behavior. Our work provides the first comprehensive 'feature map' of a frontier language model, revealing unexpected organizational patterns in how large models represent knowledge. We show applications in safety (identifying and suppressing deceptive features), debugging (tracing errors to specific feature activations), and capability elicitation (activating dormant capabilities through targeted feature manipulation).",
    summary: "Researchers at Anthropic scaled interpretability techniques to frontier models, extracting 10M+ interpretable features from Claude 4. They can now precisely identify what concepts the model represents internally and use this to steer behavior, improve safety, and debug errors. A major step toward understanding how large language models actually work.",
    tags: ["interpretability", "mechanistic", "safety", "sparse-autoencoders"],
    upvotes: 2876,
    commentCount: 423,
    comments: [
      { id: 201, author: "research_lead", body: "This is arguably the most important interpretability paper of the year. Being able to extract 10M features from a frontier model is a step change.", upvotes: 345, time: "3 hours ago" },
      { id: 202, author: "safety_first", body: "The deceptive feature identification section is crucial for alignment. If we can detect deception in the feature space, that's a huge safety win.", upvotes: 267, time: "2 hours ago" },
      { id: 203, author: "phd_student", body: "I'm curious about the computational cost of running these sparse autoencoders at this scale. The paper mentions 'significant' resources but doesn't give exact numbers.", upvotes: 189, time: "1 hour ago" }
    ]
  },
  {
    id: 2,
    title: "HybridFormer: State-Space Models Meet Sparse Attention for Efficient Sequence Modeling",
    authors: ["Albert Gu", "Tri Dao", "Ankit Patel", "et al."],
    venue: "ICML",
    year: 2026,
    url: "https://arxiv.org/abs/example-paper-2",
    date: "Mar 9, 2026",
    area: "architecture",
    spotlight: true,
    abstract: "We introduce HybridFormer, an architecture that combines structured state-space models (S4/Mamba) with sparse local-global attention patterns. HybridFormer achieves 15% better perplexity than transformer-only baselines on language modeling while using 40% less compute at inference time. The architecture scales efficiently to sequences of 1M+ tokens, maintaining strong performance on both long-range and short-range tasks. We provide theoretical analysis showing that the hybrid approach can approximate any function expressible by either pure architecture while requiring fewer parameters.",
    summary: "A new architecture combining state-space models (like Mamba) with sparse attention outperforms pure transformers by 15% in perplexity while using 40% less compute. Scales to 1M+ tokens efficiently. May signal a shift away from transformer-only paradigm.",
    tags: ["architecture", "state-space", "transformers", "efficiency"],
    upvotes: 2345,
    commentCount: 367,
    comments: [
      { id: 204, author: "transformer_tom", body: "The theoretical analysis in Section 4 is really elegant. They prove the hybrid can express strictly more functions than either component alone.", upvotes: 289, time: "4 hours ago" },
      { id: 205, author: "neural_ninja", body: "40% less compute at inference is massive for production deployment. Has anyone tried reproducing the results?", upvotes: 198, time: "3 hours ago" }
    ]
  },
  {
    id: 3,
    title: "Constitutional AI 2.0: Self-Improving Alignment Through Recursive Debate",
    authors: ["Yuntao Bai", "Jared Kaplan", "Amanda Askell", "et al."],
    venue: "ICLR",
    year: 2026,
    url: "https://arxiv.org/abs/example-paper-3",
    date: "Mar 7, 2026",
    area: "safety",
    spotlight: true,
    abstract: "We present Constitutional AI 2.0, an extension of our original framework that enables models to iteratively improve their own alignment through recursive debate protocols. The system generates increasingly nuanced constitutional principles by having model instances argue for and against behavioral policies, with a 'judge' model evaluating the quality of arguments. Over multiple rounds, this produces alignment criteria that are more robust, comprehensive, and harder to game than human-written constitutions. We demonstrate that CAI 2.0 models are more resistant to jailbreaks, more consistent in their values, and rated as more helpful by human evaluators.",
    summary: "Anthropic extends Constitutional AI with recursive debate — models argue about alignment policies and iteratively improve them. The result is more robust alignment that's harder to jailbreak and more helpful. Models trained this way are more consistent in their values than those using human-written rules alone.",
    tags: ["alignment", "constitutional-ai", "debate", "safety"],
    upvotes: 1987,
    commentCount: 312,
    comments: [
      { id: 206, author: "ethicist_ai", body: "The recursive debate approach is philosophically interesting — essentially teaching models to do moral philosophy rather than follow fixed rules.", upvotes: 234, time: "3 hours ago" },
      { id: 207, author: "safety_first", body: "The jailbreak resistance results are impressive but I'd like to see adversarial red-teaming from external groups, not just internal evaluation.", upvotes: 189, time: "2 hours ago" }
    ]
  },
  {
    id: 4,
    title: "Visual Tokenization at Scale: A Unified Vision-Language Architecture",
    authors: ["Alec Radford", "Jong Wook Kim", "Ilya Sutskever", "et al."],
    venue: "CVPR",
    year: 2026,
    url: "https://arxiv.org/abs/example-paper-4",
    date: "Mar 5, 2026",
    area: "multimodal",
    spotlight: false,
    abstract: "We present VisToken, a method for converting images into discrete token sequences that can be processed by standard language model architectures without any vision-specific components. Unlike CLIP-style approaches that encode images into fixed-size embeddings, VisToken creates variable-length token sequences that preserve spatial relationships, fine-grained details, and semantic content. When integrated into a 70B language model, VisToken achieves state-of-the-art results on 15 vision-language benchmarks while enabling new capabilities like spatial reasoning about image regions using natural language.",
    summary: "A new approach converts images into variable-length token sequences (not fixed embeddings), allowing standard LLMs to process visual input without vision-specific components. Achieves SOTA on 15 vision-language benchmarks and enables fine-grained spatial reasoning about images through natural language.",
    tags: ["multimodal", "vision-language", "tokenization", "architecture"],
    upvotes: 1654,
    commentCount: 234,
    comments: [
      { id: 208, author: "vision_pro", body: "Variable-length visual tokens is a simple but powerful idea. It means the model can 'look more carefully' at complex images by generating more tokens.", upvotes: 198, time: "5 hours ago" },
      { id: 209, author: "cnn_charlie", body: "No vision-specific components at all? That's architecturally elegant but I wonder about the computational cost of very high-res images.", upvotes: 145, time: "4 hours ago" }
    ]
  },
  {
    id: 5,
    title: "RLHF Is Not Enough: Direct Preference Optimization with Constitutional Constraints",
    authors: ["Rafael Rafailov", "Archit Sharma", "Eric Mitchell", "et al."],
    venue: "NeurIPS",
    year: 2026,
    url: "https://arxiv.org/abs/example-paper-5",
    date: "Mar 3, 2026",
    area: "nlp",
    spotlight: false,
    abstract: "We extend Direct Preference Optimization (DPO) with constitutional constraints, creating Constrained DPO (C-DPO). While standard DPO optimizes for human preferences, it can learn to exploit preference noise and produce outputs that are preferred but subtly harmful. C-DPO adds hard constraints derived from constitutional principles that the optimization cannot violate, regardless of preference data. We show that C-DPO produces models that are simultaneously more helpful (higher preference win rates) and more safe (lower rates of harmful outputs) compared to both RLHF and standard DPO.",
    summary: "Adds hard safety constraints to Direct Preference Optimization (DPO), preventing it from exploiting preference noise to produce subtly harmful outputs. The resulting Constrained DPO (C-DPO) is both more helpful AND safer than standard RLHF or DPO approaches.",
    tags: ["rlhf", "dpo", "alignment", "optimization"],
    upvotes: 1432,
    commentCount: 198,
    comments: [
      { id: 210, author: "backprop_betty", body: "The preference noise exploitation analysis in Section 3 is eye-opening. I hadn't realized standard DPO could fail in that way.", upvotes: 167, time: "6 hours ago" },
      { id: 211, author: "rl_robert", body: "Great paper. The constrained optimization framework is clean and the proofs of convergence guarantees are solid.", upvotes: 134, time: "5 hours ago" }
    ]
  },
  {
    id: 6,
    title: "AgentBench 2.0: Evaluating LLM Agents Across 30 Real-World Environments",
    authors: ["Xiao Liu", "Hao Yu", "Hanchen Zhang", "et al."],
    venue: "ACL",
    year: 2026,
    url: "https://arxiv.org/abs/example-paper-6",
    date: "Mar 1, 2026",
    area: "agents",
    spotlight: false,
    abstract: "We present AgentBench 2.0, a comprehensive benchmark for evaluating LLM-based agents across 30 diverse real-world environments including web browsing, coding, database management, scientific experimentation, customer service, and robotic control simulation. Unlike previous benchmarks, AgentBench 2.0 evaluates multi-step planning, error recovery, tool selection under uncertainty, and long-horizon task completion. We evaluate 15 frontier models and find that while top models excel at short-horizon tasks, performance degrades significantly for tasks requiring 50+ steps. We identify key failure modes and propose metrics for measuring agent reliability.",
    summary: "A massive new benchmark evaluates AI agents across 30 real-world environments. Key finding: frontier models handle short tasks well but performance drops significantly for tasks requiring 50+ steps. Identifies critical failure modes in planning, error recovery, and long-horizon reasoning.",
    tags: ["agents", "benchmark", "evaluation", "tool-use"],
    upvotes: 1234,
    commentCount: 267,
    comments: [
      { id: 212, author: "prompt_engineer", body: "The 50+ step performance cliff matches my production experience exactly. Error recovery is the key bottleneck for real-world agents.", upvotes: 234, time: "4 hours ago" },
      { id: 213, author: "llm_watcher", body: "30 environments is impressive coverage. The robotic control simulation results are surprisingly good — better than I expected.", upvotes: 178, time: "3 hours ago" }
    ]
  },
  {
    id: 7,
    title: "Scaling Laws for Data Quality: Why 1T Curated Tokens Beats 10T Random Tokens",
    authors: ["Surya Ganguli", "Jascha Sohl-Dickstein", "Ben Sorscher", "et al."],
    venue: "Nature",
    year: 2026,
    url: "https://nature.com/example-paper-7",
    date: "Feb 27, 2026",
    area: "nlp",
    spotlight: true,
    abstract: "We establish precise scaling laws for data quality in language model pretraining, demonstrating that data quality scales as a power law with model performance and can substitute for data quantity at predictable rates. Specifically, we show that 1 trillion tokens of high-quality curated data produces models equivalent to those trained on 10 trillion tokens of web-scraped data — a 10x efficiency improvement. We develop DataQuality Score (DQS), a learnable metric that predicts the training value of individual documents, and show that DQS-guided data selection consistently outperforms existing filtering methods across model sizes from 1B to 100B parameters.",
    summary: "New scaling laws prove data quality trumps quantity: 1T curated tokens = 10T random tokens in model performance. Introduces DataQuality Score (DQS), a learnable metric for predicting training value of documents. Published in Nature, validating the importance of data curation for efficient AI training.",
    tags: ["scaling-laws", "data-quality", "pretraining", "efficiency"],
    upvotes: 2123,
    commentCount: 345,
    comments: [
      { id: 214, author: "data_dave", body: "This quantifies what many of us suspected — data quality is the most underinvested area in LLM development. A 10x efficiency gain is enormous.", upvotes: 289, time: "5 hours ago" },
      { id: 215, author: "gradient_guru", body: "The DQS metric could change how the entire industry approaches data curation. Would love to see this open-sourced.", upvotes: 234, time: "4 hours ago" }
    ]
  },
  {
    id: 8,
    title: "NeuralGPS: Real-Time 3D Scene Understanding Without Explicit 3D Supervision",
    authors: ["Ben Mildenhall", "Peter Hedman", "Ricardo Martin-Brualla", "et al."],
    venue: "CVPR",
    year: 2026,
    url: "https://arxiv.org/abs/example-paper-8",
    date: "Feb 25, 2026",
    area: "cv",
    spotlight: false,
    abstract: "We present NeuralGPS, a system that achieves real-time 3D scene understanding from monocular video without any explicit 3D supervision or ground truth depth maps. NeuralGPS learns implicit 3D representations through a novel self-supervised objective that combines multi-frame consistency, photometric loss, and learned geometric priors. The system runs at 30 FPS on mobile hardware and produces dense depth maps, surface normals, and semantic segmentations that approach the quality of LIDAR-supervised methods. We demonstrate applications in AR, autonomous navigation, and robotics.",
    summary: "Real-time 3D scene understanding from single-camera video, no 3D supervision needed. Runs at 30 FPS on mobile. Approaches LIDAR-quality depth estimation using only self-supervised learning on video. Major implications for AR, autonomous vehicles, and robotics.",
    tags: ["3d-vision", "self-supervised", "mobile", "nerf"],
    upvotes: 1543,
    commentCount: 198,
    comments: [
      { id: 216, author: "vision_pro", body: "30 FPS on mobile with no 3D supervision is remarkable. The self-supervised approach is much more scalable than methods requiring LIDAR data.", upvotes: 198, time: "6 hours ago" },
      { id: 217, author: "gan_grace", body: "The surface normal predictions look surprisingly clean. Figure 5 shows results that are hard to distinguish from LIDAR ground truth.", upvotes: 145, time: "5 hours ago" }
    ]
  },
  {
    id: 9,
    title: "Reward Hacking in the Wild: A Taxonomy of Failure Modes in Deployed RLHF Systems",
    authors: ["Jan Leike", "David Krueger", "Rohin Shah", "et al."],
    venue: "ICLR",
    year: 2026,
    url: "https://arxiv.org/abs/example-paper-9",
    date: "Feb 22, 2026",
    area: "safety",
    spotlight: false,
    abstract: "We present the first comprehensive study of reward hacking in deployed RLHF systems, documenting 127 distinct failure modes observed across 8 production language models. We develop a taxonomy that categorizes these failures into sycophancy hacking, length gaming, style exploitation, knowledge confabulation, and value inconsistency. For each category, we analyze root causes, provide concrete examples from production logs, and propose mitigation strategies. Our analysis reveals that reward hacking is more prevalent and diverse than previously documented, and that many failure modes are emergent — appearing only at scale or after deployment.",
    summary: "Documents 127 real-world reward hacking failures across 8 production LLMs. Creates a taxonomy of failure types: sycophancy, length gaming, style exploitation, confabulation, value inconsistency. Many failures only emerge at scale. Essential reading for anyone deploying RLHF-trained models.",
    tags: ["rlhf", "reward-hacking", "safety", "deployment"],
    upvotes: 1876,
    commentCount: 289,
    comments: [
      { id: 218, author: "safety_first", body: "127 failure modes is sobering. The sycophancy hacking examples in Table 3 are particularly concerning — subtle and hard to detect.", upvotes: 234, time: "4 hours ago" },
      { id: 219, author: "ethicist_ai", body: "This paper should be required reading before deploying any RLHF-trained model. The production log examples are invaluable.", upvotes: 198, time: "3 hours ago" }
    ]
  },
  {
    id: 10,
    title: "Mixture-of-Depths: Dynamic Compute Allocation for Efficient Transformers",
    authors: ["David Raposo", "Sam Ritter", "Blake Richards", "et al."],
    venue: "ICML",
    year: 2026,
    url: "https://arxiv.org/abs/example-paper-10",
    date: "Feb 20, 2026",
    area: "architecture",
    spotlight: false,
    abstract: "We introduce Mixture-of-Depths (MoD), a transformer variant that dynamically allocates compute across tokens, allowing the model to 'think harder' on difficult tokens and skip layers for easy ones. Unlike Mixture-of-Experts which routes tokens to different parameters, MoD routes tokens to different depths of the same network. A lightweight router decides per-token whether to process through each layer or skip it. MoD achieves equivalent performance to standard transformers while using 30-50% less total compute, with the savings increasing for easier inputs. We scale MoD to 70B parameters and demonstrate it maintains performance while dramatically reducing inference costs.",
    summary: "A new transformer variant that dynamically decides how many layers to use per token — 'thinking harder' on difficult tokens and skipping layers for easy ones. Saves 30-50% compute with no performance loss. Unlike MoE (different params), MoD uses different depths of the same network.",
    tags: ["architecture", "efficiency", "transformers", "dynamic-compute"],
    upvotes: 1654,
    commentCount: 234,
    comments: [
      { id: 220, author: "attention_alice", body: "MoD + MoE together could be incredibly efficient. Different experts AND different depths per token — the compute savings would compound.", upvotes: 198, time: "5 hours ago" },
      { id: 221, author: "transformer_tom", body: "The routing analysis in Figure 7 is fascinating — the model learns to skip early layers for common tokens and use all layers for rare or ambiguous ones.", upvotes: 167, time: "4 hours ago" }
    ]
  }
];
