# 🚀 Next.js Blog Platform — Learning Project Tasks

This project is a **practical learning roadmap for mastering Next.js** by building a full-featured **blog platform** from scratch.  
It follows the official Next.js learning topics — including layouts, routing, data fetching, authentication, metadata, and deployment — but applies them in a real-world project context.

---

## ⚙️ Phase 1: Setup

### 🗂 Task 1 — Initialize Project
**Goal:** Create a base Next.js project
- [ ] Initialize project: `npx create-next-app@latest next-blog`
- [ ] Choose TypeScript
- [ ] Install ESLint and Prettier
- [ ] Set up folder structure:
  - [ ] `/app`
  - [ ] `/components`
  - [ ] `/lib`
  - [ ] `/styles`
- [ ] Make first commit and push to GitHub

---

### 🎨 Task 2 — Add Tailwind CSS
**Goal:** Set up styling system
- [ ] Install Tailwind CSS (`npm install -D tailwindcss postcss autoprefixer`)
- [ ] Initialize: `npx tailwindcss init -p`
- [ ] Configure paths in `tailwind.config.js`
- [ ] Add global styles (`globals.css`)
- [ ] Test Tailwind by creating a styled sample page

---

### 🧩 Task 3 — Project Foundation
**Goal:** Prepare base architecture
- [ ] Configure path aliases (`@/components`, `@/lib`, etc.)
- [ ] Add favicon and metadata
- [ ] Add dark/light theme support (via Tailwind or `next-themes`)
- [ ] Create reusable `Container` component
- [ ] Create base layout (`layout.tsx`)

---

## 🎨 Phase 2: UI and Layout

### 🧱 Task 4 — Layout and Components
**Goal:** Build basic page structure
- [ ] Create `Header` with navigation
- [ ] Create `Footer`
- [ ] Use `next/link` for navigation
- [ ] Highlight active link
- [ ] Ensure responsive design

---

### 🖼 Task 5 — Fonts and Images
**Goal:** Optimize UI visuals
- [ ] Add custom font via `next/font` (e.g., Inter)
- [ ] Use `next/image` for post cover images
- [ ] Make images responsive
- [ ] Create `PostCard` component with image, title, excerpt, and “Read more” link

---

## 🧭 Phase 3: Routing and Pages

### 📑 Task 6 — Create Pages
**Goal:** Build main routes
- [ ] `/` — homepage (list of posts)
- [ ] `/posts/[slug]` — single post page
- [ ] `/about` — about page
- [ ] `/login` — login page
- [ ] Add links in Header navigation

---

### 🔄 Task 7 — Dynamic Routing
**Goal:** Implement dynamic pages
- [ ] Use `[slug]` dynamic route
- [ ] Fetch data from database or mock JSON
- [ ] Add fallback loading state

---

## 🗄 Phase 4: Database and Models

### 💾 Task 8 — Setup Prisma and Database
**Goal:** Connect a database
- [ ] Install Prisma (`npm install prisma --save-dev`)
- [ ] Initialize (`npx prisma init`)
- [ ] Use SQLite or Supabase
- [ ] Add `.env` with `DATABASE_URL`
- [ ] Define schema models:
  - [ ] `User`
  - [ ] `Post`
  - [ ] `Comment`

---

### 🧱 Task 9 — Seed the Database
**Goal:** Add test data
- [ ] Create `prisma/seed.ts`
- [ ] Add sample users and posts
- [ ] Run `npx prisma db seed`

---

## 📡 Phase 5: Data Fetching and Rendering

### 📥 Task 10 — Fetch and Display Posts
**Goal:** Display dynamic content
- [ ] Use server components for data fetching
- [ ] Fetch posts using `prisma.post.findMany()`
- [ ] Display post list on homepage
- [ ] Show single post on `/posts/[slug]`

---

### ⚡️ Task 11 — Rendering Strategies
**Goal:** Understand SSG and SSR
- [ ] Use **SSG** for static blog posts
- [ ] Use **SSR** for user or dashboard pages
- [ ] Add `loading.tsx` for skeleton UI
- [ ] Add `error.tsx` for error handling

---

## 🔍 Phase 6: Search and Pagination

### 🔎 Task 12 — Add Search
**Goal:** Enable content search
- [ ] Add search input on homepage
- [ ] Filter results server-side
- [ ] Show message when no results found

---

### 📄 Task 13 — Pagination
**Goal:** Add post pagination
- [ ] Limit posts (e.g., 5 per page)
- [ ] Add “Next” / “Previous” buttons
- [ ] Preserve pagination state in URL

---

## ✍️ Phase 7: Mutations and CRUD

### 🧮 Task 14 — Create Post
**Goal:** Add post creation form
- [ ] Use `server actions` or API routes
- [ ] Validate form input
- [ ] Save data to database
- [ ] Show newly created post immediately

---

### ✏️ Task 15 — Edit and Delete Posts
**Goal:** Full CRUD for posts
- [ ] Add edit form
- [ ] Implement delete functionality
- [ ] Confirm before deleting a post

---

### 💬 Task 16 — Comments (Optional)
**Goal:** Add commenting system
- [ ] Create comment form
- [ ] Save comments to database
- [ ] Display comments below posts

---

## 🚨 Phase 8: Errors and Accessibility

### ⚠️ Task 17 — Error Handling
**Goal:** Improve user experience on errors
- [ ] Add `error.js` in app root
- [ ] Add `not-found.js`
- [ ] Create custom 404 page

---

### ♿️ Task 18 — Accessibility
**Goal:** Improve accessibility and UX
- [ ] Check color contrast
- [ ] Add `aria-label` attributes
- [ ] Ensure focus states for buttons/links
- [ ] Test accessibility with Lighthouse

---

## 🔐 Phase 9: Authentication

### 🔑 Task 19 — Add NextAuth
**Goal:** Implement authentication
- [ ] Install `next-auth`
- [ ] Set up provider (GitHub or Email)
- [ ] Add `/api/auth/[...nextauth]/route.ts`
- [ ] Test login and logout flow

---

### 🧍 Task 20 — Protect Routes
**Goal:** Restrict access for unauthenticated users
- [ ] Allow post creation/edit only for logged-in users
- [ ] Use `useSession()` to check user state
- [ ] Add Login/Logout button in Header

---

## 🌐 Phase 10: SEO and Metadata

### 🧠 Task 21 — Metadata API
**Goal:** Improve SEO and social previews
- [ ] Add `export const metadata` to pages
- [ ] Dynamic title/description for each post
- [ ] Add Open Graph and Twitter tags

---

### 🗺 Task 22 — Sitemap and RSS
**Goal:** Add technical SEO elements
- [ ] Generate `sitemap.xml`
- [ ] Add RSS feed (`/rss.xml`)
- [ ] Verify indexing in Google Search Console

---

## 🚀 Phase 11: Deployment and Extras

### ☁️ Task 23 — Deploy to Vercel
**Goal:** Deploy live application
- [ ] Create account on [vercel.com](https://vercel.com)
- [ ] Connect GitHub repository
- [ ] Configure environment variables
- [ ] Verify production build

---

### 📈 Task 24 — Analytics and Optimization
**Goal:** Measure and improve performance
- [ ] Add Vercel Analytics or Plausible
- [ ] Test performance with Lighthouse
- [ ] Optimize load times and assets

---

### 📘 Task 25 — Final Polish
**Goal:** Final project cleanup
- [ ] Write detailed README.md with setup instructions
- [ ] Add screenshots and demo link
- [ ] Verify responsive design
- [ ] (Optional) Record short demo video

---

✅ **Once you complete all tasks, you’ll have a production-ready, fully functional Next.js Blog with authentication, database, SEO, and deployment — and deep understanding of how Next.js works!**
