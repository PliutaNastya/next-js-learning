# Setting Up Path Aliases (`@/`) in Next.js + TypeScript + ESLint + VS Code

---

## 1️⃣ Configure **TypeScript**

**File:** `next-blog/tsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/app/*": ["./app/*"],
      "@/lib/*": ["./app/lib/*"],
      "@/ui/*": ["./app/ui/*"]
    }
  }
}
```

### What this does

- baseUrl tells TypeScript where to start looking for files (in this case, the project root).
- paths defines shortcuts (aliases) for directories, so you can import with @/....

## 2️⃣ Install ESLint dependencies

Run this command to make ESLint understand your TypeScript aliases:

`npm i -D eslint-plugin-import eslint-import-resolver-typescript`

### What this does

- `eslint-plugin-import adds` import-related rules.
- `eslint-import-resolver-typescript` helps ESLint resolve TypeScript paths defined in tsconfig.json.

## 3️⃣ Update ESLint config

File: `next-blog/eslint.config.mjs`

```js
import importPlugin from "eslint-plugin-import";

export default [
  // ... your existing Next.js + TypeScript config,
  {
    plugins: {
      import: importPlugin,
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
  },
];
```

### What this does

- Adds the import plugin.
- Tells ESLint to read aliases from your tsconfig.json.

## 4️⃣ Configure VS Code

File: `.vscode/settings.json`

```json
{
  "typescript.preferences.importModuleSpecifier": "non-relative",
  "javascript.preferences.importModuleSpecifier": "non-relative",
  "eslint.workingDirectories": [
    { "directory": "next-blog", "changeProcessCWD": true }
  ]
}
```

### What this does

- Makes VS Code auto-import using `@/...` instead of `../../`.
- Ensures ESLint works inside the correct project folder.

## 5️⃣ Configure **Prettier**

**File:** `next-blog/.prettierrc`

```json
{
  "semi": false,
  "singleQuote": true,
  "printWidth": 100,
  "trailingComma": "none"
}
```

### What this does

- semi: false — removes semicolons (;) from the end of lines
- singleQuote: true — uses ' instead of " for strings
- printWidth: 100 — sets the max line width before wrapping
- trailingComma: "none" — removes trailing commas in objects/arrays

# 🪶 SEO Basics in Next.js: Favicon, Metadata, Sitemap & Robots

## 🧩 Favicon

### 🔧 How to add a favicon in Next.js (App Router)

- Place your icon file in `/app` or `/public`:
  ```
  /public/favicon.ico
  ```
- Next.js automatically detects it.

**Custom example:**

```tsx
// app/layout.tsx
export const metadata = {
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-touch-icon.png",
  },
};
```

---

## 🪪 Metadata

Metadata in Next.js automatically generates HTML `<head>` tags  
like `<title>`, `<meta name="description">`, and Open Graph tags.

**Basic example:**

```tsx
// app/layout.tsx
export const metadata = {
  title: "My Blog",
  description: "A simple pastel-themed blog built with Next.js",
};
```

**Dynamic metadata example:**

```tsx
// app/blog/[slug]/page.tsx
import { getPost } from "@/app/lib/posts";

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}
```

💡 _Next.js automatically handles Open Graph and Twitter cards from your metadata._

---

## 🤖 Robots.txt & 🗺️ Sitemap.xml

| File          | Purpose                                   | Format | Location |
| ------------- | ----------------------------------------- | ------ | -------- |
| `sitemap.xml` | List of all site pages for search engines | XML    | `/`      |
| `robots.txt`  | Tells bots what can or can’t be indexed   | TXT    | `/`      |

---

### 🗺️ Sitemap.xml

A sitemap is a “map” of your website in XML format.  
It helps search engines know which pages exist, when they were updated, and how often they change.

**Example:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://myblog.com/</loc>
    <lastmod>2025-10-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://myblog.com/posts/first-post</loc>
    <lastmod>2025-10-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

**Next.js integration:**

```tsx
// app/sitemap.ts
export default async function sitemap() {
  const posts = await getAllPosts();
  const baseUrl = "https://myblog.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...posts.map((post) => ({
      url: `${baseUrl}/posts/${post.slug}`,
      lastModified: post.updatedAt,
    })),
  ];
}
```

💡 _Next.js automatically generates `sitemap.xml` during build._

---

### 🤖 Robots.txt

The `robots.txt` file tells search bots which parts of your site they can access.

**Example:**

```txt
User-agent: *
Allow: /
Sitemap: https://myblog.com/sitemap.xml
```

**Next.js version:**

```tsx
// app/robots.ts
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://myblog.com/sitemap.xml",
  };
}
```

---

✅ **In short:**

- `favicon` → tab icon
- `metadata` → SEO info (titles, descriptions, Open Graph, etc.)
- `sitemap.xml` → all pages for Google
- `robots.txt` → indexing rules for bots

# 🌗 Add Dark/Light Theme in Next.js (with `next-themes`)

## 1️⃣ Install the package

```bash
npm install next-themes
```

---

## 2️⃣ Wrap your app with `ThemeProvider`

Edit your file:  
`app/layout.tsx`

```tsx
<html lang="en" suppressHydrationWarning>
  <body>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  </body>
</html>
```

✅ `attribute="class"` → adds `dark` or `light` class on `<html>`  
✅ `defaultTheme="system"` → follows user’s OS theme  
✅ `enableSystem` → automatically updates when user changes system theme  
✅ `suppressHydrationWarning` → prevents hydration error (see below)

---

## 3️⃣ Create a Theme Toggle Button

`app/ui/theme-toggle.tsx`

---

## 4️⃣ Use it in where you need

`<ThemeToggle />`

---

## ⚠️ About the Hydration Error

You might see:

```
A tree hydrated but some attributes of the server rendered HTML didn't match...
```

**Why it happens:**  
The server renders the page before the theme is known (light/dark),  
so the HTML differs between **server** and **client**.

**Fix:**
✅ Add `suppressHydrationWarning` to `<html>`  
✅ Use `mounted` state before rendering icons or theme-dependent UI  
✅ Don’t manually add `className="dark"` in `<html>`  
✅ Avoid code like `Date.now()` or `Math.random()` in SSR components

---

## ✅ Summary

| Step | Action                                                  |
| ---- | ------------------------------------------------------- |
| 1    | Install `next-themes`                                   |
| 2    | Wrap your layout with `ThemeProvider`                   |
| 3    | Add a toggle button using `useTheme()`                  |
| 4    | Add `suppressHydrationWarning` to avoid hydration error |
| 5    | Enjoy dark/light mode 🌞🌙                              |
