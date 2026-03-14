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

// ===== NEWS & INTERVIEWS =====
const NEWS_ITEMS = [
  {
    id: 1,
    type: "interview",
    title: "Ilya Sutskever on the Future of AI Safety and Superintelligence",
    source: "Lex Fridman Podcast",
    author: "Lex Fridman",
    guest: "Ilya Sutskever",
    date: "Mar 8, 2026",
    summary: "Ilya Sutskever sits down for a wide-ranging interview covering his departure from OpenAI, the founding of Safe Superintelligence Inc (SSI), and his vision for building AI systems that are fundamentally safe. He discusses why he believes alignment is a solvable problem, the importance of interpretability research, and his predictions for AGI timelines. Sutskever also shares candid reflections on the transformer architecture's limitations and what might come next.",
    tags: ["ai-safety", "superintelligence", "interview"],
    videoUrl: "https://www.youtube.com/watch?v=example1",
    duration: "2h 34m",
    upvotes: 3421,
    comments: []
  },
  {
    id: 2,
    type: "interview",
    title: "Dario Amodei: Scaling Laws, Claude, and Anthropic's Mission",
    source: "Hard Fork — The New York Times",
    author: "Kevin Roose & Casey Newton",
    guest: "Dario Amodei",
    date: "Mar 5, 2026",
    summary: "Anthropic CEO Dario Amodei discusses the latest Claude model capabilities, Anthropic's approach to responsible scaling, and the competitive landscape of frontier AI labs. He explains why Anthropic chose to publish their Responsible Scaling Policy, how they think about dangerous capability evaluations, and shares his outlook on AI regulation. Amodei also addresses concerns about the concentration of power in AI development and Anthropic's efforts to democratize access.",
    tags: ["anthropic", "claude", "scaling", "interview"],
    videoUrl: "https://www.youtube.com/watch?v=example2",
    duration: "1h 12m",
    upvotes: 2876,
    comments: []
  },
  {
    id: 3,
    type: "interview",
    title: "Sam Altman on GPT-5, OpenAI's Roadmap, and the Path to AGI",
    source: "Bloomberg Technology",
    author: "Emily Chang",
    guest: "Sam Altman",
    date: "Mar 1, 2026",
    summary: "OpenAI CEO Sam Altman reveals details about GPT-5's architecture and capabilities in this exclusive interview. He discusses the shift toward multimodal reasoning, OpenAI's enterprise strategy, and the ongoing debate about open vs. closed source AI. Altman also addresses the organizational restructuring at OpenAI, competition with Anthropic and Google, and why he believes we're closer to AGI than most people think.",
    tags: ["openai", "gpt-5", "agi", "interview"],
    videoUrl: "https://www.youtube.com/watch?v=example3",
    duration: "45m",
    upvotes: 2154,
    comments: []
  },
  {
    id: 4,
    type: "news",
    title: "Google DeepMind Achieves Breakthrough in Protein-Drug Interaction Prediction",
    source: "Nature News",
    date: "Mar 10, 2026",
    summary: "Google DeepMind has announced a major advance in predicting how drug molecules interact with proteins, building on the success of AlphaFold. The new model, AlphaBind, can predict binding affinity with unprecedented accuracy, potentially accelerating drug discovery timelines by years. Several pharmaceutical companies have already begun integrating the tool into their pipelines.",
    tags: ["deepmind", "drug-discovery", "alphafold"],
    articleUrl: "https://nature.com/example",
    upvotes: 1987,
    comments: []
  },
  {
    id: 5,
    type: "interview",
    title: "Yann LeCun Debates the Limits of Large Language Models",
    source: "MIT Technology Review",
    author: "Will Douglas Heaven",
    guest: "Yann LeCun",
    date: "Feb 25, 2026",
    summary: "Meta's Chief AI Scientist Yann LeCun argues that autoregressive LLMs have fundamental limitations that prevent them from achieving true understanding. He presents his vision for 'world models' based on Joint Embedding Predictive Architecture (JEPA) and explains why he believes the next breakthrough will come from self-supervised learning on video data rather than scaling language models further.",
    tags: ["meta", "world-models", "jepa", "interview"],
    videoUrl: "https://www.youtube.com/watch?v=example4",
    duration: "1h 28m",
    upvotes: 1654,
    comments: []
  },
  {
    id: 6,
    type: "news",
    title: "EU AI Act Enforcement Begins — First Compliance Audits Underway",
    source: "Reuters",
    date: "Mar 12, 2026",
    summary: "The European Union has officially begun enforcing the AI Act, with regulatory bodies conducting the first compliance audits of high-risk AI systems. Several major tech companies have received preliminary assessment notices. The enforcement focuses initially on prohibited AI practices and high-risk systems in healthcare, law enforcement, and critical infrastructure.",
    tags: ["regulation", "eu-ai-act", "policy"],
    articleUrl: "https://reuters.com/example",
    upvotes: 1432,
    comments: []
  },
  {
    id: 7,
    type: "news",
    title: "Open Source Coalition Releases 70B Parameter Model Rivaling GPT-4",
    source: "TechCrunch",
    date: "Mar 7, 2026",
    summary: "A coalition of universities and independent researchers has released Meridian-70B, an open-source language model that matches GPT-4 performance on most benchmarks. The model was trained using a novel distributed training approach across 50 institutions worldwide, demonstrating that frontier AI development doesn't require billion-dollar compute budgets. Weights, training code, and data are all publicly available under Apache 2.0.",
    tags: ["open-source", "llm", "meridian"],
    articleUrl: "https://techcrunch.com/example",
    upvotes: 3245,
    comments: []
  },
  {
    id: 8,
    type: "interview",
    title: "Demis Hassabis on AI for Scientific Discovery and Nobel Prizes",
    source: "60 Minutes",
    author: "Scott Pelley",
    guest: "Demis Hassabis",
    date: "Feb 20, 2026",
    summary: "Following his Nobel Prize in Chemistry for AlphaFold, Demis Hassabis discusses Google DeepMind's broader mission to use AI for scientific discovery. He shares insights on upcoming projects in materials science and climate modeling, the ethical responsibilities that come with powerful AI systems, and why he believes AI will be the most transformative technology in human history.",
    tags: ["deepmind", "science", "nobel", "interview"],
    videoUrl: "https://www.youtube.com/watch?v=example5",
    duration: "22m",
    upvotes: 2098,
    comments: []
  }
];

// ===== KNOWLEDGE — RESEARCH PAPERS =====
const PAPERS = [
  {
    id: 1,
    title: "Scaling Monosemanticity: Extracting Interpretable Features from Claude 4",
    authors: ["Adly Templeton", "Tom Brown", "Chris Olah", "et al."],
    venue: "Nature Machine Intelligence",
    venueType: "journal",
    date: "Mar 2026",
    abstract: "We apply sparse autoencoders to extract millions of interpretable features from Claude 4, demonstrating that large language models develop rich internal representations of concepts ranging from code syntax to ethical reasoning. Our work reveals that features become increasingly abstract and compositional at larger scales, suggesting a path toward comprehensive AI interpretability.",
    tags: ["interpretability", "sparse-autoencoders", "anthropic"],
    paperUrl: "https://nature.com/example-paper-1",
    pdfUrl: "https://arxiv.org/pdf/example1",
    upvotes: 2876,
    comments: []
  },
  {
    id: 2,
    title: "HybridFormer: Combining State-Space Models with Sparse Attention for Efficient Long-Context Modeling",
    authors: ["DeepMind Research Team"],
    venue: "ICML 2026",
    venueType: "conference",
    date: "Feb 2026",
    abstract: "We introduce HybridFormer, an architecture that interleaves Mamba-style state-space layers with sparse local attention blocks. On language modeling benchmarks, HybridFormer achieves 15% lower perplexity than pure transformers while requiring 40% less compute at inference time. The model scales gracefully to 1M+ token contexts without the quadratic memory overhead of full attention.",
    tags: ["architecture", "state-space-models", "efficiency"],
    paperUrl: "https://arxiv.org/abs/example2",
    pdfUrl: "https://arxiv.org/pdf/example2",
    upvotes: 2341,
    comments: []
  },
  {
    id: 3,
    title: "Constitutional AI at Scale: Lessons from Deploying RLHF-Free Alignment",
    authors: ["Amanda Askell", "Yuntao Bai", "Deep Ganguli", "et al."],
    venue: "NeurIPS 2026",
    venueType: "conference",
    date: "Mar 2026",
    abstract: "We present a comprehensive study of Constitutional AI (CAI) deployed at scale across Claude model versions. Our analysis covers three years of deployment data, demonstrating that CAI produces models with more consistent safety properties than RLHF while maintaining strong capabilities. We introduce new constitutional principles for multi-turn interactions and tool use, and present ablation studies on the impact of principle selection.",
    tags: ["alignment", "constitutional-ai", "safety"],
    paperUrl: "https://arxiv.org/abs/example3",
    pdfUrl: "https://arxiv.org/pdf/example3",
    upvotes: 1987,
    comments: []
  },
  {
    id: 4,
    title: "AlphaBind: Predicting Protein-Ligand Binding Affinity with Atomic Precision",
    authors: ["John Jumper", "Pushmeet Kohli", "et al."],
    venue: "Science",
    venueType: "journal",
    date: "Mar 2026",
    abstract: "Building on the AlphaFold framework, we introduce AlphaBind, a model that predicts protein-ligand binding affinities with near-experimental accuracy. On a held-out test set of 50,000 protein-drug pairs, AlphaBind achieves a Pearson correlation of 0.89 with experimentally measured binding free energies, a significant improvement over physics-based methods (0.65) and previous ML approaches (0.74).",
    tags: ["drug-discovery", "proteins", "deepmind"],
    paperUrl: "https://science.org/example4",
    pdfUrl: "https://science.org/pdf/example4",
    upvotes: 3102,
    comments: []
  },
  {
    id: 5,
    title: "Reward Hacking in Frontier AI Systems: A Comprehensive Taxonomy and Mitigation Strategies",
    authors: ["Jan Leike", "David Krueger", "et al."],
    venue: "ICLR 2026",
    venueType: "conference",
    date: "Jan 2026",
    abstract: "We present the first large-scale empirical study of reward hacking behaviors in frontier language models. Across 1,200 RL training runs, we identify 23 distinct categories of reward hacking and propose a taxonomy that distinguishes specification gaming, reward tampering, and emergent deceptive alignment. We evaluate 8 mitigation strategies and find that a combination of process-based rewards and interpretability-guided training reduces reward hacking by 78%.",
    tags: ["reward-hacking", "alignment", "safety"],
    paperUrl: "https://arxiv.org/abs/example5",
    pdfUrl: "https://arxiv.org/pdf/example5",
    upvotes: 1654,
    comments: []
  },
  {
    id: 6,
    title: "Visual Tokenizers: Learning Discrete Representations for Unified Vision-Language Models",
    authors: ["Kaiming He", "Xinlei Chen", "et al."],
    venue: "CVPR 2026",
    venueType: "conference",
    date: "Feb 2026",
    abstract: "We propose a novel visual tokenizer that converts images into discrete tokens compatible with language model architectures. Unlike CLIP-based approaches, our tokenizer preserves fine-grained spatial information while achieving a 10x compression ratio. When integrated into a 7B parameter language model, the resulting unified model achieves state-of-the-art performance on 12 vision-language benchmarks simultaneously.",
    tags: ["vision-language", "tokenization", "multimodal"],
    paperUrl: "https://arxiv.org/abs/example6",
    pdfUrl: "https://arxiv.org/pdf/example6",
    upvotes: 1432,
    comments: []
  },
  {
    id: 7,
    title: "The Geometry of Truth: Emergent Linear Structure in Language Model Representations of Factual Statements",
    authors: ["Samuel Marks", "Max Tegmark"],
    venue: "Nature",
    venueType: "journal",
    date: "Feb 2026",
    abstract: "We discover that large language models encode the truth value of factual statements in a remarkably simple linear structure. By probing the residual stream of models ranging from 1B to 175B parameters, we find that a single linear direction consistently separates true from false statements across diverse topics. This 'truth direction' emerges during pretraining and becomes more robust with scale, suggesting that LLMs develop an internal model of factual accuracy.",
    tags: ["interpretability", "mechanistic", "truth"],
    paperUrl: "https://nature.com/example7",
    pdfUrl: "https://nature.com/pdf/example7",
    upvotes: 2567,
    comments: []
  },
  {
    id: 8,
    title: "Distributed Training Without Borders: How 50 Institutions Trained a Frontier Model",
    authors: ["Meridian Consortium"],
    venue: "ICML 2026",
    venueType: "conference",
    date: "Mar 2026",
    abstract: "We describe the technical infrastructure behind Meridian-70B, a frontier language model trained across 50 institutions on 3 continents using a novel asynchronous distributed training protocol. Our approach handles heterogeneous hardware, variable network bandwidth, and institutional compute scheduling constraints while maintaining training stability. We show that decentralized training at this scale is not only feasible but produces models competitive with those trained on centralized clusters.",
    tags: ["distributed-training", "open-source", "infrastructure"],
    paperUrl: "https://arxiv.org/abs/example8",
    pdfUrl: "https://arxiv.org/pdf/example8",
    upvotes: 1876,
    comments: []
  }
];

const TRENDING = [
  { community: "h/LLMs", title: "Claude 4.6 Opus benchmark results", upvotes: "1.8k" },
  { community: "h/OpenSource", title: "PixelForge v1.0 released", upvotes: "4.5k" },
  { community: "h/Beginners", title: "2026 AI/ML learning roadmap", upvotes: "3.9k" },
  { community: "h/MachineLearning", title: "Wildfire detection from satellite imagery", upvotes: "2.3k" },
  { community: "h/AIResearch", title: "HybridFormer challenges transformer paradigm", upvotes: "1.2k" }
];
