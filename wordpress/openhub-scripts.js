/* ===================================================================
   OPENHUB — BUNDLED JAVASCRIPT FOR WORDPRESS (WPCode JS Snippet)
   All modules merged in dependency order.
   =================================================================== */

// ===== SAMPLE DATA FOR OPENHUB =====

var COMMUNITIES = {
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
      "Stay on topic \u2014 ML related content only",
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
    tagline: "Large Language Models \u2014 news, research & discussion",
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
    description: "Share and discover open source AI projects. From frameworks to models to datasets \u2014 if it's open, it belongs here.",
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

var USERS = [
  "neural_ninja", "gradient_guru", "tensor_titan", "backprop_betty",
  "data_dave", "model_mary", "epoch_ed", "loss_lucy",
  "kernel_kate", "relu_rick", "softmax_sam", "dropout_dan",
  "attention_alice", "transformer_tom", "cnn_charlie", "gan_grace",
  "bert_bob", "llama_lisa", "diffusion_diana", "rl_robert"
];

var SAMPLE_POSTS = [
  {
    id: 1,
    community: "h/LLMs",
    communityKey: "llms",
    author: "transformer_tom",
    title: "Claude 4.6 Opus just dropped \u2014 here are my benchmark results",
    body: "I've been running comprehensive benchmarks on the new Claude 4.6 Opus model across coding, reasoning, and creative tasks. The results are remarkable \u2014 significant improvements in multi-step reasoning and tool use. Here's my full breakdown with methodology and raw numbers.\n\nKey findings:\n- 23% improvement on HumanEval coding benchmarks\n- Near-perfect scores on graduate-level reasoning tasks\n- Substantially better at following complex, multi-part instructions\n- Improved context window utilization\n\nI'll be publishing the full dataset on GitHub later this week.",
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
    title: "The EU AI Act enforcement begins next month \u2014 what developers need to know",
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
    title: "We just released a fully open-source alternative to Midjourney \u2014 Apache 2.0 licensed",
    body: "After a year of development, our team is proud to release PixelForge v1.0 \u2014 a fully open-source image generation model that rivals commercial offerings.\n\nHighlights:\n- 12B parameter diffusion transformer model\n- Trained on 4B curated, licensed images\n- Apache 2.0 license \u2014 use it for anything\n- Runs on consumer GPUs (RTX 4070+ recommended)\n- LoRA fine-tuning support out of the box\n- ComfyUI and Automatic1111 compatible\n\nGitHub repo, model weights, and documentation are all live now.",
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
    title: "The absolute beginner's roadmap to learning AI/ML in 2026 \u2014 updated guide",
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
    title: "I built an agent that autonomously debugs and fixes production code \u2014 here's what I learned",
    body: "Over the past month, I've been running an autonomous coding agent in our production environment. It monitors error logs, identifies root causes, writes fixes, runs tests, and creates PRs \u2014 all without human intervention.\n\nSurprising findings:\n- It correctly fixed 73% of bugs on the first attempt\n- Average time from error detection to PR: 4 minutes\n- The remaining 27% were mostly architectural issues requiring human judgment\n- It saved our team roughly 20 hours per week\n\nI'll share the architecture, prompt engineering lessons, and failure modes.",
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
    title: "Real-time 3D scene reconstruction from a single phone camera \u2014 demo inside",
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
    title: "PSA: Your data preprocessing pipeline is probably leaking information \u2014 here's how to check",
    body: "I've been auditing ML pipelines at various companies and the #1 issue I find is data leakage in preprocessing. Here are the most common mistakes:\n\n1. Fitting scalers/encoders on the full dataset before splitting\n2. Using future data in time-series feature engineering\n3. Target leakage through correlated proxy features\n4. Leakage in cross-validation folds\n\nI've written a Python library called LeakCheck that automatically detects these issues. Just pip install leakcheck and run it on your pipeline.",
    tags: ["data-science", "best-practices", "tools", "data-leakage"],
    upvotes: 1089,
    comments: 156,
    time: "22 hours ago",
    pinned: false
  }
];

var SAMPLE_COMMENTS = [
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
        body: "Great suggestion! I actually just finished those runs. Results look even more impressive \u2014 will update the post tomorrow.",
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

var TRENDING = [
  { community: "h/LLMs", title: "Claude 4.6 Opus benchmark results", upvotes: "1.8k" },
  { community: "h/OpenSource", title: "PixelForge v1.0 released", upvotes: "4.5k" },
  { community: "h/Beginners", title: "2026 AI/ML learning roadmap", upvotes: "3.9k" },
  { community: "h/MachineLearning", title: "Wildfire detection from satellite imagery", upvotes: "2.3k" },
  { community: "h/AIResearch", title: "HybridFormer challenges transformer paradigm", upvotes: "1.2k" }
];


// ===== OPENHUB — SHARED UTILITIES & STATE =====

window.OpenHub = window.OpenHub || {};

(function (hub) {
  "use strict";

  hub.$ = function (sel) { return document.querySelector(sel); };
  hub.$$ = function (sel) { return document.querySelectorAll(sel); };

  hub.state = {
    currentUser: null,
    posts: typeof SAMPLE_POSTS !== "undefined" ? [].concat(SAMPLE_POSTS) : [],
    nextPostId: typeof SAMPLE_POSTS !== "undefined" ? SAMPLE_POSTS.length + 1 : 1,
  };

  hub.formatNumber = function (n) {
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    return String(n);
  };

  hub.escapeHtml = function (str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  };
})(window.OpenHub);


// ===== OPENHUB — POSTS MODULE =====

(function (hub) {
  "use strict";

  var $ = hub.$;
  var $$ = hub.$$;

  hub.renderPostCard = function (post) {
    var communityData = COMMUNITIES[post.communityKey] || {};
    var tags = (post.tags || []).map(function (t) { return '<span class="tag">' + t + "</span>"; }).join("");
    return (
      '<article class="post-card" data-id="' + post.id + '">' +
        '<div class="vote-column">' +
          '<button class="vote-btn upvote-btn" data-id="' + post.id + '" data-dir="up" title="Upvote">' +
            '<i class="fas fa-arrow-up"></i>' +
          "</button>" +
          '<span class="vote-count" id="vote-' + post.id + '">' + hub.formatNumber(post.upvotes) + "</span>" +
          '<button class="vote-btn downvote-btn" data-id="' + post.id + '" data-dir="down" title="Downvote">' +
            '<i class="fas fa-arrow-down"></i>' +
          "</button>" +
        "</div>" +
        '<div class="post-content">' +
          '<div class="post-meta">' +
            '<a href="?page_id=COMMUNITY_PAGE_ID&c=' + post.communityKey + '">' + post.community + "</a>" +
            "<span>&bull;</span>" +
            '<span>Posted by <a href="#">u/' + post.author + "</a></span>" +
            "<span>&bull;</span>" +
            "<span>" + post.time + "</span>" +
            (post.pinned ? '<span class="tag" style="background:#fdcb6e;color:#2d3436"><i class="fas fa-thumbtack"></i> Pinned</span>' : "") +
          "</div>" +
          '<h2 class="post-title">' +
            '<a href="?page_id=POST_PAGE_ID&id=' + post.id + '">' + hub.escapeHtml(post.title) + "</a>" +
          "</h2>" +
          (post.body ? '<div class="post-body-preview">' + hub.escapeHtml(post.body.substring(0, 200)) + (post.body.length > 200 ? "..." : "") + "</div>" : "") +
          (tags ? '<div class="post-tags">' + tags + "</div>" : "") +
          '<div class="post-actions">' +
            '<button class="action-btn"><i class="fas fa-comment"></i> ' + hub.formatNumber(post.comments) + " Comments</button>" +
            '<button class="action-btn share-btn"><i class="fas fa-share"></i> Share</button>' +
            '<button class="action-btn save-btn"><i class="fas fa-bookmark"></i> Save</button>' +
          "</div>" +
        "</div>" +
      "</article>"
    );
  };

  hub.renderPosts = function (container, postList) {
    if (!container) return;
    container.innerHTML = postList.map(hub.renderPostCard).join("");
    hub.attachVoteListeners(container);
  };

  hub.attachVoteListeners = function (container) {
    container.querySelectorAll(".vote-btn").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var id = parseInt(btn.dataset.id);
        var dir = btn.dataset.dir;
        var post = hub.state.posts.find(function (p) { return p.id === id; });
        if (!post) return;

        var card = btn.closest(".vote-column");
        var upBtn = card.querySelector(".upvote-btn");
        var downBtn = card.querySelector(".downvote-btn");
        var countEl = card.querySelector(".vote-count");

        if (dir === "up") {
          if (upBtn.classList.contains("upvoted")) {
            upBtn.classList.remove("upvoted");
            post.upvotes--;
          } else {
            upBtn.classList.add("upvoted");
            post.upvotes++;
            if (downBtn.classList.contains("downvoted")) {
              downBtn.classList.remove("downvoted");
              post.upvotes++;
            }
          }
        } else {
          if (downBtn.classList.contains("downvoted")) {
            downBtn.classList.remove("downvoted");
            post.upvotes++;
          } else {
            downBtn.classList.add("downvoted");
            post.upvotes--;
            if (upBtn.classList.contains("upvoted")) {
              upBtn.classList.remove("upvoted");
              post.upvotes--;
            }
          }
        }
        countEl.textContent = hub.formatNumber(post.upvotes);
      });
    });
  };

  hub.initSort = function () {
    $$(".sort-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        $$(".sort-btn").forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var sort = btn.dataset.sort;
        var sorted = [].concat(hub.state.posts);
        if (sort === "hot") sorted.sort(function (a, b) { return (b.upvotes + b.comments * 3) - (a.upvotes + a.comments * 3); });
        else if (sort === "new") sorted = [].concat(hub.state.posts).reverse();
        else if (sort === "top") sorted.sort(function (a, b) { return b.upvotes - a.upvotes; });
        var container = $("#posts-container");
        hub.renderPosts(container, sorted);
      });
    });
  };

  hub.initSearch = function () {
    var input = $("#search-input");
    if (!input) return;
    var debounce;
    input.addEventListener("input", function () {
      clearTimeout(debounce);
      debounce = setTimeout(function () {
        var q = input.value.toLowerCase().trim();
        var container = $("#posts-container");
        if (!q) {
          hub.renderPosts(container, hub.state.posts);
          return;
        }
        var filtered = hub.state.posts.filter(function (p) {
          return (
            p.title.toLowerCase().includes(q) ||
            (p.body && p.body.toLowerCase().includes(q)) ||
            p.community.toLowerCase().includes(q) ||
            (p.tags && p.tags.some(function (t) { return t.toLowerCase().includes(q); }))
          );
        });
        hub.renderPosts(container, filtered);
      }, 300);
    });
  };
})(window.OpenHub);


// ===== COMPONENT: NAVBAR =====

(function (hub) {
  "use strict";

  hub.renderNavbar = function () {
    var root = document.getElementById("navbar-root");
    if (!root) return;

    root.innerHTML =
      '<header class="navbar">' +
        '<div class="navbar-left">' +
          '<a href="?page_id=HOME_PAGE_ID" class="logo">' +
            '<span class="logo-icon">\u2B21</span>' +
            '<span class="logo-text">Open<strong>hub</strong></span>' +
          '</a>' +
        '</div>' +
        '<div class="navbar-center">' +
          '<div class="search-bar">' +
            '<i class="fas fa-search"></i>' +
            '<input type="text" id="search-input" placeholder="Search Openhub" autocomplete="off">' +
          '</div>' +
        '</div>' +
        '<div class="navbar-right">' +
          '<button class="icon-btn" id="theme-toggle" title="Toggle dark mode"><i class="fas fa-moon"></i></button>' +
          '<button class="icon-btn" title="Notifications"><i class="fas fa-bell"></i></button>' +
          '<button class="btn btn-outline" id="login-btn">Log In</button>' +
          '<button class="btn btn-primary" id="signup-btn">Sign Up</button>' +
        '</div>' +
        '<button class="mobile-menu-btn" id="mobile-menu-btn"><i class="fas fa-bars"></i></button>' +
      '</header>';

    var saved = localStorage.getItem("openhub-theme");
    if (saved === "dark") document.documentElement.setAttribute("data-theme", "dark");
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var isDark = document.documentElement.getAttribute("data-theme") === "dark";
        if (isDark) {
          document.documentElement.removeAttribute("data-theme");
          localStorage.setItem("openhub-theme", "light");
          btn.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
          document.documentElement.setAttribute("data-theme", "dark");
          localStorage.setItem("openhub-theme", "dark");
          btn.innerHTML = '<i class="fas fa-sun"></i>';
        }
      });
      if (localStorage.getItem("openhub-theme") === "dark") {
        btn.innerHTML = '<i class="fas fa-sun"></i>';
      }
    }

    var menuBtn = document.getElementById("mobile-menu-btn");
    var sidebar = document.getElementById("sidebar-left");
    if (menuBtn && sidebar) {
      menuBtn.addEventListener("click", function () { sidebar.classList.toggle("open"); });
    }
  };
})(window.OpenHub);


// ===== COMPONENT: LEFT SIDEBAR =====

(function (hub) {
  "use strict";

  var fullSidebar =
    '<aside class="sidebar sidebar-left" id="sidebar-left">' +
      '<nav class="sidebar-nav">' +
        '<h4 class="sidebar-heading">Feeds</h4>' +
        '<a href="#" class="sidebar-link active"><i class="fas fa-fire"></i> Hot</a>' +
        '<a href="#" class="sidebar-link"><i class="fas fa-bolt"></i> New</a>' +
        '<a href="#" class="sidebar-link"><i class="fas fa-chart-line"></i> Top</a>' +
        '<a href="#" class="sidebar-link"><i class="fas fa-arrow-trend-up"></i> Rising</a>' +
      '</nav>' +
      '<nav class="sidebar-nav">' +
        '<h4 class="sidebar-heading">Communities</h4>' +
        '<a href="?page_id=COMMUNITY_PAGE_ID&c=machinelearning" class="sidebar-link"><i class="fas fa-brain"></i> h/MachineLearning</a>' +
        '<a href="?page_id=COMMUNITY_PAGE_ID&c=llms" class="sidebar-link"><i class="fas fa-robot"></i> h/LLMs</a>' +
        '<a href="?page_id=COMMUNITY_PAGE_ID&c=computervision" class="sidebar-link"><i class="fas fa-eye"></i> h/ComputerVision</a>' +
        '<a href="?page_id=COMMUNITY_PAGE_ID&c=nlp" class="sidebar-link"><i class="fas fa-language"></i> h/NLP</a>' +
        '<a href="?page_id=COMMUNITY_PAGE_ID&c=ethics" class="sidebar-link"><i class="fas fa-scale-balanced"></i> h/AIethics</a>' +
        '<a href="?page_id=COMMUNITY_PAGE_ID&c=opensource" class="sidebar-link"><i class="fas fa-code-branch"></i> h/OpenSource</a>' +
        '<a href="?page_id=COMMUNITY_PAGE_ID&c=research" class="sidebar-link"><i class="fas fa-flask"></i> h/AIResearch</a>' +
        '<a href="?page_id=COMMUNITY_PAGE_ID&c=beginners" class="sidebar-link"><i class="fas fa-graduation-cap"></i> h/Beginners</a>' +
      '</nav>' +
      '<nav class="sidebar-nav">' +
        '<h4 class="sidebar-heading">Resources</h4>' +
        '<a href="#" class="sidebar-link"><i class="fas fa-book"></i> Wiki</a>' +
        '<a href="#" class="sidebar-link"><i class="fas fa-calendar"></i> Events</a>' +
        '<a href="#" class="sidebar-link"><i class="fas fa-briefcase"></i> Jobs Board</a>' +
      '</nav>' +
    '</aside>';

  var simpleSidebar =
    '<aside class="sidebar sidebar-left" id="sidebar-left">' +
      '<nav class="sidebar-nav">' +
        '<h4 class="sidebar-heading">Navigation</h4>' +
        '<a href="?page_id=HOME_PAGE_ID" class="sidebar-link"><i class="fas fa-home"></i> Home</a>' +
        '<a href="#" class="sidebar-link"><i class="fas fa-fire"></i> Hot</a>' +
        '<a href="#" class="sidebar-link"><i class="fas fa-bolt"></i> New</a>' +
      '</nav>' +
    '</aside>';

  hub.renderSidebarLeft = function (variant) {
    var root = document.getElementById("sidebar-left-root");
    if (!root) return;
    root.innerHTML = (variant === "full") ? fullSidebar : simpleSidebar;
  };
})(window.OpenHub);


// ===== COMPONENT: AUTH MODAL =====

(function (hub) {
  "use strict";

  hub.renderAuthModal = function () {
    var root = document.getElementById("auth-modal-root");
    if (!root) return;

    root.innerHTML =
      '<div class="modal-overlay" id="auth-overlay">' +
        '<div class="modal modal-sm" id="auth-modal">' +
          '<div class="modal-header">' +
            '<h3 id="auth-title">Log In</h3>' +
            '<button class="icon-btn modal-close" id="auth-close"><i class="fas fa-times"></i></button>' +
          '</div>' +
          '<div class="modal-body">' +
            '<input type="text" class="input" id="auth-username" placeholder="Username">' +
            '<input type="password" class="input" id="auth-password" placeholder="Password">' +
            '<input type="email" class="input hidden" id="auth-email" placeholder="Email">' +
          '</div>' +
          '<div class="modal-footer">' +
            '<button class="btn btn-primary btn-block" id="auth-submit">Log In</button>' +
            '<p class="auth-switch">Don\'t have an account? <a href="#" id="auth-toggle">Sign Up</a></p>' +
          '</div>' +
        '</div>' +
      '</div>';

    var $ = hub.$;
    var overlay = $("#auth-overlay");
    var closeBtn = $("#auth-close");
    var loginBtn = $("#login-btn");
    var signupBtn = $("#signup-btn");
    var toggleLink = $("#auth-toggle");
    var titleEl = $("#auth-title");
    var emailField = $("#auth-email");
    var submitBtn = $("#auth-submit");
    var isSignup = false;

    function openAuth(signup) {
      isSignup = signup;
      if (titleEl) titleEl.textContent = signup ? "Sign Up" : "Log In";
      if (emailField) emailField.classList.toggle("hidden", !signup);
      if (submitBtn) submitBtn.textContent = signup ? "Sign Up" : "Log In";
      if (toggleLink) toggleLink.textContent = signup ? "Log In" : "Sign Up";
      if (overlay) overlay.classList.add("active");
    }
    function closeAuth() {
      if (overlay) overlay.classList.remove("active");
    }

    if (loginBtn) loginBtn.addEventListener("click", function () { openAuth(false); });
    if (signupBtn) signupBtn.addEventListener("click", function () { openAuth(true); });
    if (closeBtn) closeBtn.addEventListener("click", closeAuth);
    if (overlay) overlay.addEventListener("click", function (e) { if (e.target === overlay) closeAuth(); });
    if (toggleLink) {
      toggleLink.addEventListener("click", function (e) {
        e.preventDefault();
        openAuth(!isSignup);
      });
    }

    if (submitBtn) {
      submitBtn.addEventListener("click", function () {
        var username = ($("#auth-username") || {}).value || "";
        if (!username.trim()) { alert("Please enter a username."); return; }
        hub.state.currentUser = username.trim();
        closeAuth();
        if (loginBtn) {
          loginBtn.textContent = "u/" + hub.state.currentUser;
          loginBtn.classList.remove("btn-outline");
          loginBtn.classList.add("btn-primary");
        }
        if (signupBtn) signupBtn.classList.add("hidden");
      });
    }
  };
})(window.OpenHub);


// ===== COMPONENT: HOME RIGHT SIDEBAR =====

(function (hub) {
  "use strict";

  hub.renderHomeSidebar = function () {
    var root = document.getElementById("sidebar-right-root");
    if (!root) return;

    root.innerHTML =
      '<div class="card">' +
        '<div class="card-banner"></div>' +
        '<h3>Welcome to Openhub</h3>' +
        '<p>Your home for AI discussion. Join communities, share research, ask questions, and stay on the cutting edge of artificial intelligence.</p>' +
        '<button class="btn btn-primary btn-block" id="create-post-btn">Create Post</button>' +
        '<button class="btn btn-outline btn-block" id="create-community-btn">Create Community</button>' +
      '</div>' +
      '<div class="card">' +
        '<h4>Trending Today</h4>' +
        '<ul class="trending-list" id="trending-list"></ul>' +
      '</div>' +
      '<div class="card">' +
        '<h4>Community Rules</h4>' +
        '<ol class="rules-list">' +
          '<li>Be respectful and constructive</li>' +
          '<li>No spam or self-promotion</li>' +
          '<li>Cite sources for research claims</li>' +
          '<li>Use appropriate flair/tags</li>' +
          '<li>No misinformation</li>' +
        '</ol>' +
      '</div>' +
      '<div class="footer-links">' +
        '<a href="#">About</a><a href="#">Terms</a><a href="#">Privacy</a><a href="#">Contact</a>' +
        '<p>&copy; 2026 Openhub</p>' +
      '</div>';

    var list = document.getElementById("trending-list");
    if (list && typeof TRENDING !== "undefined") {
      list.innerHTML = TRENDING.map(function (t) {
        return (
          "<li>" +
            '<div class="trending-community">' + t.community + "</div>" +
            '<div class="trending-title">' + t.title + "</div>" +
            '<div class="trending-community">' + t.upvotes + " upvotes</div>" +
          "</li>"
        );
      }).join("");
    }
  };
})(window.OpenHub);


// ===== COMPONENT: CREATE POST MODAL =====

(function (hub) {
  "use strict";

  hub.renderCreatePostBox = function () {
    var root = document.getElementById("create-post-box-root");
    if (!root) return;

    root.innerHTML =
      '<div class="create-post-box">' +
        '<div class="create-post-avatar"><i class="fas fa-user-circle"></i></div>' +
        '<input type="text" class="create-post-input" id="create-post-trigger" placeholder="Create a post" readonly>' +
        '<button class="icon-btn"><i class="fas fa-image"></i></button>' +
        '<button class="icon-btn"><i class="fas fa-link"></i></button>' +
      '</div>';
  };

  hub.renderCreatePostModal = function () {
    var root = document.getElementById("create-post-modal-root");
    if (!root) return;

    root.innerHTML =
      '<div class="modal-overlay" id="modal-overlay">' +
        '<div class="modal" id="create-post-modal">' +
          '<div class="modal-header">' +
            '<h3>Create a Post</h3>' +
            '<button class="icon-btn modal-close" id="modal-close"><i class="fas fa-times"></i></button>' +
          '</div>' +
          '<div class="modal-body">' +
            '<select id="post-community" class="input">' +
              '<option value="">Choose a community</option>' +
              '<option value="h/MachineLearning">h/MachineLearning</option>' +
              '<option value="h/LLMs">h/LLMs</option>' +
              '<option value="h/ComputerVision">h/ComputerVision</option>' +
              '<option value="h/NLP">h/NLP</option>' +
              '<option value="h/AIethics">h/AIethics</option>' +
              '<option value="h/OpenSource">h/OpenSource</option>' +
              '<option value="h/AIResearch">h/AIResearch</option>' +
              '<option value="h/Beginners">h/Beginners</option>' +
            '</select>' +
            '<div class="post-type-tabs">' +
              '<button class="tab active" data-type="text"><i class="fas fa-align-left"></i> Text</button>' +
              '<button class="tab" data-type="link"><i class="fas fa-link"></i> Link</button>' +
              '<button class="tab" data-type="image"><i class="fas fa-image"></i> Image</button>' +
            '</div>' +
            '<input type="text" class="input" id="post-title" placeholder="Title" maxlength="300">' +
            '<textarea class="input textarea" id="post-body" placeholder="What\'s on your mind?"></textarea>' +
            '<input type="text" class="input hidden" id="post-link" placeholder="URL">' +
            '<input type="text" class="input" id="post-tags" placeholder="Tags (comma separated)">' +
          '</div>' +
          '<div class="modal-footer">' +
            '<button class="btn btn-outline" id="modal-cancel">Cancel</button>' +
            '<button class="btn btn-primary" id="modal-submit">Post</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    var $ = hub.$;
    var $$ = hub.$$;
    var triggers = [$("#create-post-trigger"), $("#create-post-btn")];
    var overlay = $("#modal-overlay");
    var closeBtn = $("#modal-close");
    var cancelBtn = $("#modal-cancel");
    var submitBtn = $("#modal-submit");

    function openModal() { if (overlay) overlay.classList.add("active"); }
    function closeModal() { if (overlay) overlay.classList.remove("active"); }

    triggers.forEach(function (t) { if (t) t.addEventListener("click", openModal); });
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (cancelBtn) cancelBtn.addEventListener("click", closeModal);
    if (overlay) overlay.addEventListener("click", function (e) { if (e.target === overlay) closeModal(); });

    $$(".post-type-tabs .tab").forEach(function (tab) {
      tab.addEventListener("click", function () {
        $$(".post-type-tabs .tab").forEach(function (t) { t.classList.remove("active"); });
        tab.classList.add("active");
        var type = tab.dataset.type;
        var linkInput = $("#post-link");
        var bodyInput = $("#post-body");
        if (type === "link") {
          if (linkInput) linkInput.classList.remove("hidden");
          if (bodyInput) bodyInput.classList.add("hidden");
        } else {
          if (linkInput) linkInput.classList.add("hidden");
          if (bodyInput) bodyInput.classList.remove("hidden");
        }
      });
    });

    if (submitBtn) {
      submitBtn.addEventListener("click", function () {
        var title = ($("#post-title") || {}).value || "";
        var body = ($("#post-body") || {}).value || "";
        var community = ($("#post-community") || {}).value || "";
        var tagsRaw = ($("#post-tags") || {}).value || "";

        if (!title.trim()) { alert("Please enter a title."); return; }
        if (!community) { alert("Please select a community."); return; }

        var tags = tagsRaw.split(",").map(function (t) { return t.trim(); }).filter(Boolean);
        var communityKey = Object.keys(COMMUNITIES).find(function (k) {
          return COMMUNITIES[k].name === community;
        }) || "machinelearning";

        var newPost = {
          id: hub.state.nextPostId++,
          community: community,
          communityKey: communityKey,
          author: hub.state.currentUser || "anonymous",
          title: title.trim(),
          body: body.trim(),
          tags: tags,
          upvotes: 1,
          comments: 0,
          time: "just now",
          pinned: false,
        };

        hub.state.posts.unshift(newPost);
        hub.renderPosts($("#posts-container"), hub.state.posts);
        closeModal();

        if ($("#post-title")) $("#post-title").value = "";
        if ($("#post-body")) $("#post-body").value = "";
        if ($("#post-community")) $("#post-community").value = "";
        if ($("#post-tags")) $("#post-tags").value = "";
      });
    }
  };
})(window.OpenHub);


// ===== COMPONENT: COMMUNITY BANNER =====

(function (hub) {
  "use strict";

  hub.renderCommunityBanner = function (community) {
    var root = document.getElementById("community-banner-root");
    if (!root || !community) return;

    root.innerHTML =
      '<div class="community-banner" id="community-banner">' +
        '<div class="community-banner-bg"></div>' +
        '<div class="community-banner-info">' +
          '<div class="community-icon"><i class="fas ' + community.icon + '"></i></div>' +
          '<div>' +
            '<h1>' + community.name + '</h1>' +
            '<p>' + community.tagline + '</p>' +
          '</div>' +
          '<button class="btn btn-primary" id="join-btn">Join</button>' +
        '</div>' +
      '</div>';

    var joinBtn = document.getElementById("join-btn");
    if (joinBtn) {
      joinBtn.addEventListener("click", function () {
        if (joinBtn.textContent === "Join") {
          joinBtn.textContent = "Joined";
          joinBtn.classList.remove("btn-primary");
          joinBtn.classList.add("btn-outline");
        } else {
          joinBtn.textContent = "Join";
          joinBtn.classList.add("btn-primary");
          joinBtn.classList.remove("btn-outline");
        }
      });
    }
  };
})(window.OpenHub);


// ===== COMPONENT: COMMUNITY RIGHT SIDEBAR CARDS =====

(function (hub) {
  "use strict";

  hub.renderCommunityCards = function (community) {
    var root = document.getElementById("sidebar-right-root");
    if (!root || !community) return;

    var rulesHtml = community.rules.map(function (r) { return "<li>" + r + "</li>"; }).join("");
    var modsHtml = community.mods.map(function (m) {
      return '<li><i class="fas fa-shield"></i> u/' + m + "</li>";
    }).join("");

    root.innerHTML =
      '<div class="card">' +
        '<h4>About this Community</h4>' +
        '<p>' + community.description + '</p>' +
        '<div class="community-stats">' +
          '<div class="stat"><strong>' + community.members + '</strong><span>Members</span></div>' +
          '<div class="stat"><strong>' + community.online + '</strong><span>Online</span></div>' +
        '</div>' +
        '<p class="community-created">Created ' + community.created + '</p>' +
      '</div>' +
      '<div class="card">' +
        '<h4>Community Rules</h4>' +
        '<ol class="rules-list">' + rulesHtml + '</ol>' +
      '</div>' +
      '<div class="card">' +
        '<h4>Moderators</h4>' +
        '<ul class="mod-list">' + modsHtml + '</ul>' +
      '</div>';
  };
})(window.OpenHub);


// ===== COMPONENT: POST DETAIL RIGHT SIDEBAR =====

(function (hub) {
  "use strict";

  hub.renderPostSidebar = function (communityData) {
    var root = document.getElementById("sidebar-right-root");
    if (!root) return;

    var name = communityData ? communityData.name : "h/MachineLearning";
    var desc = communityData ? communityData.description : "A place to discuss machine learning.";

    root.innerHTML =
      '<div class="card">' +
        '<h4>' + name + '</h4>' +
        '<p>' + desc + '</p>' +
        '<button class="btn btn-primary btn-block">Join Community</button>' +
      '</div>';
  };
})(window.OpenHub);


// ===== OPENHUB — POST DETAIL & COMMENTS MODULE =====

(function (hub) {
  "use strict";

  var $ = hub.$;

  function renderComment(comment, nested) {
    var replies = (comment.replies || []).map(function (r) { return renderComment(r, true); }).join("");
    return (
      '<div class="comment ' + (nested ? "nested" : "") + '">' +
        '<div class="comment-header">' +
          '<span class="comment-author">u/' + comment.author + "</span>" +
          '<span class="comment-time">' + comment.time + "</span>" +
        "</div>" +
        '<div class="comment-body">' + hub.escapeHtml(comment.body) + "</div>" +
        '<div class="comment-actions">' +
          '<button class="comment-vote-up" data-id="' + comment.id + '"><i class="fas fa-arrow-up"></i> ' + comment.upvotes + "</button>" +
          '<button><i class="fas fa-reply"></i> Reply</button>' +
          '<button><i class="fas fa-share"></i> Share</button>' +
        "</div>" +
        replies +
      "</div>"
    );
  }

  function renderComments() {
    var container = $("#comments-container");
    var countEl = $("#comment-count");
    if (!container) return;
    if (countEl) countEl.textContent = SAMPLE_COMMENTS.length + " Comments";
    container.innerHTML = SAMPLE_COMMENTS.map(function (c) { return renderComment(c, false); }).join("");
    attachCommentVotes(container);
  }

  function attachCommentVotes(container) {
    container.querySelectorAll(".comment-vote-up").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (btn.classList.contains("upvoted")) {
          btn.classList.remove("upvoted");
          btn.style.color = "";
        } else {
          btn.classList.add("upvoted");
          btn.style.color = "var(--upvote)";
        }
      });
    });
  }

  function initCommentForm(post) {
    var submitBtn = $("#comment-submit");
    var input = $("#comment-input");
    if (!submitBtn || !input) return;

    submitBtn.addEventListener("click", function () {
      var body = input.value.trim();
      if (!body) return;

      var newComment = {
        id: Date.now(),
        author: hub.state.currentUser || "anonymous",
        body: body,
        upvotes: 1,
        time: "just now",
        replies: [],
      };

      SAMPLE_COMMENTS.unshift(newComment);
      renderComments();
      input.value = "";
    });
  }

  hub.initPostDetail = function () {
    var container = $("#post-detail");
    if (!container) return;

    var params = new URLSearchParams(window.location.search);
    var postId = parseInt(params.get("id"));
    var post = hub.state.posts.find(function (p) { return p.id === postId; });

    if (!post) {
      container.innerHTML = "<p>Post not found.</p>";
      return;
    }

    document.title = post.title + " \u2014 Openhub";

    var tags = (post.tags || []).map(function (t) { return '<span class="tag">' + t + "</span>"; }).join("");
    container.innerHTML =
      '<div class="post-meta">' +
        '<a href="?page_id=COMMUNITY_PAGE_ID&c=' + post.communityKey + '">' + post.community + "</a>" +
        "<span>&bull;</span>" +
        '<span>Posted by <a href="#">u/' + post.author + "</a></span>" +
        "<span>&bull;</span>" +
        "<span>" + post.time + "</span>" +
      "</div>" +
      '<h1 class="post-title">' + hub.escapeHtml(post.title) + "</h1>" +
      (tags ? '<div class="post-tags">' + tags + "</div>" : "") +
      '<div class="post-body-full">' + hub.escapeHtml(post.body || "").replace(/\n/g, "<br>") + "</div>" +
      '<div class="vote-row">' +
        '<button class="vote-btn upvote-btn" data-id="' + post.id + '" data-dir="up"><i class="fas fa-arrow-up"></i></button>' +
        '<span class="vote-count" id="vote-' + post.id + '">' + hub.formatNumber(post.upvotes) + "</span>" +
        '<button class="vote-btn downvote-btn" data-id="' + post.id + '" data-dir="down"><i class="fas fa-arrow-down"></i></button>' +
        '<span style="margin-left:16px" class="action-btn"><i class="fas fa-comment"></i> ' + hub.formatNumber(post.comments) + " Comments</span>" +
        '<button class="action-btn share-btn"><i class="fas fa-share"></i> Share</button>' +
        '<button class="action-btn save-btn"><i class="fas fa-bookmark"></i> Save</button>' +
      "</div>";

    container.querySelectorAll(".vote-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var dir = btn.dataset.dir;
        var row = btn.closest(".vote-row");
        var upBtn = row.querySelector(".upvote-btn");
        var downBtn = row.querySelector(".downvote-btn");
        var countEl = row.querySelector(".vote-count");

        if (dir === "up") {
          if (upBtn.classList.contains("upvoted")) { upBtn.classList.remove("upvoted"); post.upvotes--; }
          else {
            upBtn.classList.add("upvoted"); post.upvotes++;
            if (downBtn.classList.contains("downvoted")) { downBtn.classList.remove("downvoted"); post.upvotes++; }
          }
        } else {
          if (downBtn.classList.contains("downvoted")) { downBtn.classList.remove("downvoted"); post.upvotes++; }
          else {
            downBtn.classList.add("downvoted"); post.upvotes--;
            if (upBtn.classList.contains("upvoted")) { upBtn.classList.remove("upvoted"); post.upvotes--; }
          }
        }
        countEl.textContent = hub.formatNumber(post.upvotes);
      });
    });

    var communityData = COMMUNITIES[post.communityKey];
    if (hub.renderPostSidebar) {
      hub.renderPostSidebar(communityData);
    }

    renderComments();
    initCommentForm(post);
  };
})(window.OpenHub);


// ===== OPENHUB — APP INIT =====

(function (hub) {
  "use strict";

  function init() {
    var path = window.location.pathname;
    var search = window.location.search;

    hub.renderNavbar();
    hub.renderAuthModal();

    // Detect page by URL parameters or path
    var isPostPage = search.includes("page_id=POST_PAGE_ID") || path.includes("post");
    var isCommunityPage = search.includes("page_id=COMMUNITY_PAGE_ID") || path.includes("community");

    if (isPostPage && document.getElementById("post-detail")) {
      hub.initSearch();
      hub.initPostDetail();

    } else if (isCommunityPage) {
      hub.renderSidebarLeft("simple");

      var params = new URLSearchParams(window.location.search);
      var key = params.get("c") || "machinelearning";
      var community = COMMUNITIES[key];

      if (community) {
        document.title = community.name + " \u2014 Openhub";
        hub.renderCommunityBanner(community);
        hub.renderCommunityCards(community);
      }

      var communityPosts = hub.state.posts.filter(function (p) { return p.communityKey === key; });
      hub.renderPosts(hub.$("#posts-container"), communityPosts);
      hub.initSort();
      hub.initSearch();

    } else {
      hub.renderSidebarLeft("full");
      hub.renderHomeSidebar();
      hub.renderCreatePostBox();
      hub.renderCreatePostModal();

      hub.renderPosts(hub.$("#posts-container"), hub.state.posts);
      hub.initSort();
      hub.initSearch();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})(window.OpenHub);
