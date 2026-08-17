# Rankaztactics — Amazon Ranking & Profitability Agency Website

A high-converting, mobile-responsive static agency website built with [Astro](https://astro.build).

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📝 Adding Blog Posts

To add a new blog post, create a Markdown file in `src/content/blog/`:

```
src/content/blog/your-post-slug.md
```

### Required Frontmatter

```yaml
---
title: "Your Post Title"
description: "A compelling meta description (160 chars max)"
pubDate: 2025-08-01
author: "Author Name"
category: "Amazon SEO"  # or "PPC & Advertising", "Listing Optimization", etc.
readTime: "5 min read"   # optional
draft: false              # set to true to hide from production
---

Your Markdown content goes here...
```

The post will automatically appear on `/blog` and have its own page at `/blog/your-post-slug`.

---

## 🔌 Connecting Embeds

### YouTube Video (Hero Section)
In `src/pages/index.astro`, find the `<!-- ACTUAL EMBED -->` comment and replace `VIDEO_ID` with your YouTube video ID.

### Calendly (CTA Section)
In `src/pages/index.astro`, find the Calendly section and replace the placeholder `<iframe>` with your Calendly embed code from: https://calendly.com → Integrations → Embed

### Tally.so Form (Contact Section)
In `src/pages/index.astro`, find the contact section and replace the placeholder with your Tally.so embed from: https://tally.so → Your Form → Share → Embed

---

## 📁 Project Structure

```
rankaztactics/
├── public/
│   └── favicon.svg
├── src/
│   ├── content/
│   │   ├── config.ts           # Blog collection schema
│   │   └── blog/               # ← Add .md files here for posts
│   ├── layouts/
│   │   └── BaseLayout.astro    # SEO meta tags, NavBar, Footer
│   ├── components/
│   │   ├── NavBar.astro
│   │   ├── BlogCard.astro
│   │   └── Footer.astro
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   └── blog/
│   │       ├── index.astro     # Blog listing
│   │       └── [slug].astro    # Individual post
│   └── styles/
│       └── global.css          # Design system tokens + utilities
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🎨 Design System

Custom CSS properties in `src/styles/global.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-base` | `#08080f` | Page background |
| `--bg-surface` | `#0f0f1a` | Section backgrounds |
| `--accent-primary` | `#f59e0b` | Buttons, highlights |
| `--text-primary` | `#f1f1f8` | Headings |
| `--text-secondary` | `#a0a0b8` | Body text |

Typography: **Plus Jakarta Sans** (Google Fonts)
