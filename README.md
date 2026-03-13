# OpenReddit

**The AI Community** — [openreddit.com](https://openreddit.com)

A Reddit-style platform for AI enthusiasts, researchers, and practitioners.

## Features

- **Community-based discussions** — Browse communities (h/MachineLearning, h/LLMs, h/AIResearch, etc.)
- **News section** — Latest AI news, interviews with industry leaders (Ilya Sutskever, Dario Amodei, Sam Altman, etc.)
- **Knowledge hub** — Curated papers from NeurIPS, ICML, ICLR, CVPR, Nature, and more
- **Upvote/Downvote system** — Vote on posts, news, papers, and comments
- **Community discussion** — Threaded comments on every post, news item, and paper
- **Create posts** — Text, link, and image post types with tags
- **Search** — Filter by title, body, community, tags, authors, venues
- **Dark mode** — Toggle between light and dark themes
- **Responsive design** — Works on desktop, tablet, and mobile
- **User auth** — Login/signup flow (client-side demo)

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Home — post feed, sidebar, trending |
| `news.html` | AI News & interview videos with summaries |
| `knowledge.html` | Curated research papers with TL;DR and abstracts |
| `community.html` | Community pages — filtered posts, rules, mods |
| `post.html` | Post detail — full content, threaded comments |

## Project Structure

```
OpenReddit/
├── index.html
├── news.html
├── knowledge.html
├── community.html
├── post.html
├── css/
│   └── style.css
└── js/
    ├── data.js
    └── app.js
```

## Getting Started

Open `index.html` in a browser — no build step or server required.

For deployment to openreddit.com, upload all files to your web host's root directory.

## Communities

| Community | Topic |
|-----------|-------|
| h/MachineLearning | ML research, tools, and applications |
| h/LLMs | Large Language Models |
| h/ComputerVision | Image and video AI |
| h/NLP | Natural Language Processing |
| h/AIethics | AI safety, bias, and regulation |
| h/OpenSource | Open source AI projects |
| h/AIResearch | Research papers and discussion |
| h/Beginners | Learning AI from scratch |
