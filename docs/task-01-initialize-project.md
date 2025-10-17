# create-next-app

Basic usage:

```bash filename="Terminal"
npx create-next-app@latest [project-name] [options]
```

## Examples

### With the default template

To create a new app using the default template, run the following command in your terminal:

```bash filename="Terminal"
npx create-next-app@latest
```

You will then be asked the following prompts:

```txt filename="Terminal"
What is your project named?  my-app
Would you like to use TypeScript?  No / Yes
Which linter would you like to use?  ESLint / Biome / None
Would you like to use Tailwind CSS?  No / Yes
Would you like your code inside a `src/` directory?  No / Yes
Would you like to use App Router? (recommended)  No / Yes
Would you like to use Turbopack? (recommended)  No / Yes
Would you like to customize the import alias (`@/*` by default)?  No / Yes
```

### With an official Next.js example

To create a new app using an official Next.js example, use the `--example` flag. For example:

```bash filename="Terminal"
npx create-next-app@latest --example [example-name] [your-project-name]
```

### With any public GitHub example

To create a new app using any public GitHub example, use the `--example` option with the GitHub repo's URL. For example:

```bash filename="Terminal"
npx create-next-app@latest --example "https://github.com/.../" [your-project-name]
```

# `app` directory

Next.js uses file-system routing, which means the routes in your application are determined by how you structure your files.

 `layout.tsx` is the [root layout](/docs/app/api-reference/file-conventions/layout.md#root-layout). It's required and must contain the `<html>` and `<body>` tags.

```tsx filename="app/layout.tsx" switcher
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

Both `layout.tsx` and `page.tsx` (home page) will be rendered when the user visits the root of your application (`/`).

![App Folder Structure](https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/docs/light/app-getting-started.png)


### Create the `public` folder (optional)

Create a [`public` folder](/docs/app/api-reference/file-conventions/public-folder.md) at the root of your project to store static assets such as images, fonts, etc. Files inside `public` can then be referenced by your code starting from the base URL (`/`).

You can then reference these assets using the root path (`/`). For example, `public/profile.png` can be referenced as `/profile.png`:

```tsx filename="app/page.tsx" highlight={4} switcher
import Image from 'next/image'

export default function Page() {
  return <Image src="/profile.png" alt="Profile" width={100} height={100} />
}
```

## Run the development server

1. Run `npm run dev` to start the development server.
2. Visit `http://localhost:3000` to view your application.
3. Edit the `app/page.tsx` file and save it to see the updated result in your browser.


### IDE Plugin

Next.js includes a custom TypeScript plugin and type checker, which VSCode and other code editors can use for advanced type-checking and auto-completion.

You can enable the plugin in VS Code by:

1. Opening the command palette (`Ctrl/⌘` + `Shift` + `P`)
2. Searching for "TypeScript: Select TypeScript Version"
3. Selecting "Use Workspace Version"

![TypeScript Command Palette](https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/docs/light/typescript-command-palette.png)

### 🧠 Fix VS Code TypeScript Version

If VS Code shows this message:

> "Falling back to bundled TypeScript version"

it means it’s using its **built-in TypeScript**, not your project’s version.

---

#### ✅ Solution

Add this file to your project:  
**`.vscode/settings.json`**

```json
{
  "typescript.tsdk": "next-blog/node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}
```

### 💡 Notes

- The "typescript.tsdk" path must point to where TypeScript is installed in your project.
- If your folder structure is different, change the path.
Example:

```json
{
  "typescript.tsdk": "node_modules/typescript/lib"
}
```
- After saving, open the Command Palette → Developer: Reload Window.
- Open any .ts or .tsx file.
- Click “TypeScript …” in the bottom-right corner → choose “Use Workspace Version.”


# Project structure and organization
@doc-version: 15.5.6

## Folder and file conventions

### Top-level folders

Top-level folders are used to organize your application's code and static assets.

![Route segments to path segments](https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/docs/light/top-level-folders.png)

|                                                                       |                                    |
| --------------------------------------------------------------------- | ---------------------------------- |
| [`app`](/docs/app.md)                                                 | App Router                         |
| [`pages`](/docs/pages/building-your-application/routing.md)           | Pages Router                       |
| [`public`](/docs/app/api-reference/file-conventions/public-folder.md) | Static assets to be served         |
| [`src`](/docs/app/api-reference/file-conventions/src-folder.md)       | Optional application source folder |

### Top-level files

Top-level files are used to configure your application, manage dependencies, run middleware, integrate monitoring tools, and define environment variables.

|                                                                                 |                                         |
| ------------------------------------------------------------------------------- | --------------------------------------- |
| **Next.js**                                                                     |                                         |
| [`next.config.js`](/docs/app/api-reference/config/next-config-js.md)            | Configuration file for Next.js          |
| [`package.json`](/docs/app/getting-started/installation.md#manual-installation) | Project dependencies and scripts        |
| [`instrumentation.ts`](/docs/app/guides/instrumentation.md)                     | OpenTelemetry and Instrumentation file  |
| [`middleware.ts`](/docs/app/api-reference/file-conventions/middleware.md)       | Next.js request middleware              |
| [`.env`](/docs/app/guides/environment-variables.md)                             | Environment variables                   |
| [`.env.local`](/docs/app/guides/environment-variables.md)                       | Local environment variables             |
| [`.env.production`](/docs/app/guides/environment-variables.md)                  | Production environment variables        |
| [`.env.development`](/docs/app/guides/environment-variables.md)                 | Development environment variables       |
| [`.eslintrc.json`](/docs/app/api-reference/config/eslint.md)                    | Configuration file for ESLint           |
| `.gitignore`                                                                    | Git files and folders to ignore         |
| `next-env.d.ts`                                                                 | TypeScript declaration file for Next.js |
| `tsconfig.json`                                                                 | Configuration file for TypeScript       |
| `jsconfig.json`                                                                 | Configuration file for JavaScript       |

### Routing Files

Add `page` to expose a route, `layout` for shared UI such as header, nav, or footer, `loading` for skeletons, `error` for error boundaries and `route` for APIs.

|                                                                                  |                     |                              |
| -------------------------------------------------------------------------------- | ------------------- | ---------------------------- |
| [`layout`](/docs/app/api-reference/file-conventions/layout.md)                   | `.js` `.jsx` `.tsx` | Layout                       |
| [`page`](/docs/app/api-reference/file-conventions/page.md)                       | `.js` `.jsx` `.tsx` | Page                         |
| [`loading`](/docs/app/api-reference/file-conventions/loading.md)                 | `.js` `.jsx` `.tsx` | Loading UI                   |
| [`not-found`](/docs/app/api-reference/file-conventions/not-found.md)             | `.js` `.jsx` `.tsx` | Not found UI                 |
| [`error`](/docs/app/api-reference/file-conventions/error.md)                     | `.js` `.jsx` `.tsx` | Error UI                     |
| [`global-error`](/docs/app/api-reference/file-conventions/error.md#global-error) | `.js` `.jsx` `.tsx` | Global error UI              |
| [`route`](/docs/app/api-reference/file-conventions/route.md)                     | `.js` `.ts`         | API endpoint                 |
| [`template`](/docs/app/api-reference/file-conventions/template.md)               | `.js` `.jsx` `.tsx` | Re-rendered layout           |
| [`default`](/docs/app/api-reference/file-conventions/default.md)                 | `.js` `.jsx` `.tsx` | Parallel route fallback page |

### Nested routes

Folders define URL segments. Nesting folders nests segments. Layouts at any level wrap their child segments. A route becomes public when a `page` or `route` file exists.

| Path                        | URL pattern     | Notes                         |
| --------------------------- | --------------- | ----------------------------- |
| `app/layout.tsx`            | —               | Root layout wraps all routes  |
| `app/blog/layout.tsx`       | —               | Wraps `/blog` and descendants |
| `app/page.tsx`              | `/`             | Public route                  |
| `app/blog/page.tsx`         | `/blog`         | Public route                  |
| `app/blog/authors/page.tsx` | `/blog/authors` | Public route                  |

### Dynamic routes

Parameterize segments with square brackets. Use `[segment]` for a single param, `[...segment]` for catch‑all, and `[[...segment]]` for optional catch‑all. Access values via the [`params`](/docs/app/api-reference/file-conventions/page.md#params-optional) prop.

| Path                            | URL pattern                                                          |
| ------------------------------- | -------------------------------------------------------------------- |
| `app/blog/[slug]/page.tsx`      | `/blog/my-first-post`                                                |
| `app/shop/[...slug]/page.tsx`   | `/shop/clothing`, `/shop/clothing/shirts`                            |
| `app/docs/[[...slug]]/page.tsx` | `/docs`, `/docs/layouts-and-pages`, `/docs/api-reference/use-router` |

### Route Groups and private folders

Organize code without changing URLs with route groups [`(group)`](/docs/app/api-reference/file-conventions/route-groups.md#convention), and colocate non-routable files with private folders [`_folder`](#private-folders).

| Path                            | URL pattern | Notes                                     |
| ------------------------------- | ----------- | ----------------------------------------- |
| `app/(marketing)/page.tsx`      | `/`         | Group omitted from URL                    |
| `app/(shop)/cart/page.tsx`      | `/cart`     | Share layouts within `(shop)`             |
| `app/blog/_components/Post.tsx` | —           | Not routable; safe place for UI utilities |
| `app/blog/_lib/data.ts`         | —           | Not routable; safe place for utils        |

### Parallel and Intercepted Routes

These features fit specific UI patterns, such as slot-based layouts or modal routing.

Use `@slot` for named slots rendered by a parent layout. Use intercept patterns to render another route inside the current layout without changing the URL, for example, to show a details view as a modal over a list.

| Pattern (docs)                                                                                 | Meaning              | Typical use case                     |
| ---------------------------------------------------------------------------------------------- | -------------------- | ------------------------------------ |
| [`@folder`](/docs/app/api-reference/file-conventions/parallel-routes.md#slots)                 | Named slot           | Sidebar + main content               |
| [`(.)folder`](/docs/app/api-reference/file-conventions/intercepting-routes.md#convention)      | Intercept same level | Preview sibling route in a modal     |
| [`(..)folder`](/docs/app/api-reference/file-conventions/intercepting-routes.md#convention)     | Intercept parent     | Open parent child as overlay         |
| [`(..)(..)folder`](/docs/app/api-reference/file-conventions/intercepting-routes.md#convention) | Intercept two levels | Deeply nested overlay                |
| [`(...)folder`](/docs/app/api-reference/file-conventions/intercepting-routes.md#convention)    | Intercept from root  | Show arbitrary route in current view |

### Metadata file conventions

#### App icons

|                                                                                                                    |                                     |                          |
| ------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | ------------------------ |
| [`favicon`](/docs/app/api-reference/file-conventions/metadata/app-icons.md#favicon)                                | `.ico`                              | Favicon file             |
| [`icon`](/docs/app/api-reference/file-conventions/metadata/app-icons.md#icon)                                      | `.ico` `.jpg` `.jpeg` `.png` `.svg` | App Icon file            |
| [`icon`](/docs/app/api-reference/file-conventions/metadata/app-icons.md#generate-icons-using-code-js-ts-tsx)       | `.js` `.ts` `.tsx`                  | Generated App Icon       |
| [`apple-icon`](/docs/app/api-reference/file-conventions/metadata/app-icons.md#apple-icon)                          | `.jpg` `.jpeg`, `.png`              | Apple App Icon file      |
| [`apple-icon`](/docs/app/api-reference/file-conventions/metadata/app-icons.md#generate-icons-using-code-js-ts-tsx) | `.js` `.ts` `.tsx`                  | Generated Apple App Icon |

#### Open Graph and Twitter images

|                                                                                                                                |                              |                            |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------------- |
| [`opengraph-image`](/docs/app/api-reference/file-conventions/metadata/opengraph-image.md#opengraph-image)                      | `.jpg` `.jpeg` `.png` `.gif` | Open Graph image file      |
| [`opengraph-image`](/docs/app/api-reference/file-conventions/metadata/opengraph-image.md#generate-images-using-code-js-ts-tsx) | `.js` `.ts` `.tsx`           | Generated Open Graph image |
| [`twitter-image`](/docs/app/api-reference/file-conventions/metadata/opengraph-image.md#twitter-image)                          | `.jpg` `.jpeg` `.png` `.gif` | Twitter image file         |
| [`twitter-image`](/docs/app/api-reference/file-conventions/metadata/opengraph-image.md#generate-images-using-code-js-ts-tsx)   | `.js` `.ts` `.tsx`           | Generated Twitter image    |

#### SEO

|                                                                                                                 |             |                       |
| --------------------------------------------------------------------------------------------------------------- | ----------- | --------------------- |
| [`sitemap`](/docs/app/api-reference/file-conventions/metadata/sitemap.md#sitemap-files-xml)                     | `.xml`      | Sitemap file          |
| [`sitemap`](/docs/app/api-reference/file-conventions/metadata/sitemap.md#generating-a-sitemap-using-code-js-ts) | `.js` `.ts` | Generated Sitemap     |
| [`robots`](/docs/app/api-reference/file-conventions/metadata/robots.md#static-robotstxt)                        | `.txt`      | Robots file           |
| [`robots`](/docs/app/api-reference/file-conventions/metadata/robots.md#generate-a-robots-file)                  | `.js` `.ts` | Generated Robots file |

### Component hierarchy

The components defined in special files are rendered in a specific hierarchy:

* `layout.js`
* `template.js`
* `error.js` (React error boundary)
* `loading.js` (React suspense boundary)
* `not-found.js` (React error boundary)
* `page.js` or nested `layout.js`

![Component Hierarchy for File Conventions](https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/docs/light/file-conventions-component-hierarchy.png)

The components are rendered recursively in nested routes, meaning the components of a route segment will be nested **inside** the components of its parent segment.

![Nested File Conventions Component Hierarchy](https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/docs/light/nested-file-conventions-component-hierarchy.png)

### Colocation

In the `app` directory, nested folders define route structure. Each folder represents a route segment that is mapped to a corresponding segment in a URL path.

However, even though route structure is defined through folders, a route is **not publicly accessible** until a `page.js` or `route.js` file is added to a route segment.

![A diagram showing how a route is not publicly accessible until a page.js or route.js file is added to a route segment.](https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/docs/light/project-organization-not-routable.png)

And, even when a route is made publicly accessible, only the **content returned** by `page.js` or `route.js` is sent to the client.

![A diagram showing how page.js and route.js files make routes publicly accessible.](https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/docs/light/project-organization-routable.png)

This means that **project files** can be **safely colocated** inside route segments in the `app` directory without accidentally being routable.

![A diagram showing colocated project files are not routable even when a segment contains a page.js or route.js file.](https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/docs/light/project-organization-colocation.png)

> **Good to know**: While you **can** colocate your project files in `app` you don't **have** to. If you prefer, you can [keep them outside the `app` directory](#store-project-files-outside-of-app).

### Private folders

Private folders can be created by prefixing a folder with an underscore: `_folderName`

This indicates the folder is a private implementation detail and should not be considered by the routing system, thereby **opting the folder and all its subfolders** out of routing.

![An example folder structure using private folders](https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/docs/light/project-organization-private-folders.png)

Since files in the `app` directory can be [safely colocated by default](#colocation), private folders are not required for colocation. However, they can be useful for:

* Separating UI logic from routing logic.
* Consistently organizing internal files across a project and the Next.js ecosystem.
* Sorting and grouping files in code editors.
* Avoiding potential naming conflicts with future Next.js file conventions.

### Route groups

Route groups can be created by wrapping a folder in parenthesis: `(folderName)`

This indicates the folder is for organizational purposes and should **not be included** in the route's URL path.

![An example folder structure using route groups](https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/docs/light/project-organization-route-groups.png)

Route groups are useful for:

* Organizing routes by site section, intent, or team. e.g. marketing pages, admin pages, etc.
* Enabling nested layouts in the same route segment level:
  * [Creating multiple nested layouts in the same segment, including multiple root layouts](#creating-multiple-root-layouts)
  * [Adding a layout to a subset of routes in a common segment](#opting-specific-segments-into-a-layout)

### Opting for loading skeletons on a specific route

To apply a [loading skeleton](/docs/app/api-reference/file-conventions/loading.md) via a `loading.js` file to a specific route, create a new route group (e.g., `/(overview)`) and then move your `loading.tsx` inside that route group.

![Folder structure showing a loading.tsx and a page.tsx inside the route group](https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/docs/light/route-group-loading.png)

Now, the `loading.tsx` file will only apply to your dashboard → overview page instead of all your dashboard pages without affecting the URL path structure.

### Creating multiple root layouts

To create multiple [root layouts](/docs/app/api-reference/file-conventions/layout.md#root-layout), remove the top-level `layout.js` file, and add a `layout.js` file inside each route group. This is useful for partitioning an application into sections that have a completely different UI or experience. The `<html>` and `<body>` tags need to be added to each root layout.

![Route Groups with Multiple Root Layouts](https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/docs/light/route-group-multiple-root-layouts.png)

In the example above, both `(marketing)` and `(shop)` have their own root layout.