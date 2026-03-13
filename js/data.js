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
