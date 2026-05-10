**Description:**

This GitHub repository contains the source code for my portfolio website.
The website is designed to showcase my skills, projects, and contact information in an elegant and interactive manner, featuring a dedicated blogs section.

**Table of Contents:**
1. Introduction
2. Features
3. Technologies Used
4. Running Locally

**1. Introduction:**

This repository hosts the source code for my portfolio website. It was initially built with vanilla HTML/CSS/JS and has been migrated to **Next.js (App Router)** for better performance, routing, and developer experience while preserving the original styling entirely.

**2. Features:**
- Responsive design that adapts to various screen sizes and devices.
- Fully Server-Side Rendered (SSR) blog parsing directly from Markdown.
- Smooth scrolling behavior and dynamic hash navigation.
- Interactive navigation menu highlighting active routes dynamically.
- Custom typing effect built natively with React.
- Scroll-based `fade-in` visibility animations using Intersection Observer.

**3. Technologies Used:**
- **Next.js (App Router)**: Core React framework for routing and server-side logic.
- **React**: Component-based UI architecture.
- **TypeScript**: Ensuring type safety across the codebase.
- **CSS3 / Custom CSS**: Entire styling logic preserved identically from the original HTML site.
- **marked.js**: For translating underlying Markdown blog files to HTML natively on the server.

**4. Running Locally:**

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.
