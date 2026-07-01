 # Portfolio — React + Vite

 A personal portfolio website built with React and Vite. This project showcases sections such as Hero, About, Projects, Resume, Services, Skills, and Contact, and includes several reusable UI components and animation utilities.

 ## Features
 - Responsive single-page portfolio
 - Animated components and page transitions
 - Reusable UI components: `GlassCard`, `Button`, `SectionHeading`, etc.
 - Sections: `Hero`, `About`, `Projects`, `Resume`, `Services`, `Skills`, `Contact`
 - Lightweight, Vite-powered development experience

 ## Tech Stack
 - React
 - Vite
 - CSS (global styles in `index.css`)
 - Animations (project contains `animations/variants.js`, e.g., Framer Motion)

 ## Getting Started
 Requirements:
 - Node.js (recommended v16+)
 - npm or yarn

 Install dependencies:

 ```bash
 npm install
 # or
 # yarn
 ```

 Run development server:

 ```bash
 npm run dev
 # or
 # yarn dev
 ```

 Build for production:

 ```bash
 npm run build
 # or
 # yarn build
 ```

 Preview production build locally:

 ```bash
 npm run preview
 # or
 # yarn preview
 ```

 ## Scripts
 Typical scripts (check `package.json` to confirm):

 - `dev` — start Vite dev server
 - `build` — create production build
 - `preview` — locally preview production build

 ## Project Structure
 - `index.html` — app entry
 - `src/` — source files
   - `main.jsx` — React entry
   - `App.jsx` — app root
   - `index.css` — global styles
   - `animations/` — motion variants and animation utilities
   - `assets/` — images, icons
   - `components/` — reusable UI and layout components
     - `layout/` — `Navbar`, `Footer`, `LoadingScreen`, etc.
     - `sections/` — `Hero`, `About`, `Projects`, `Contact`, etc.
     - `ui/` — `Button`, `GlassCard`, `ParticleField`, etc.
   - `data/` — content for personal info, projects, resume, services, skills, social
   - `hooks/` — custom hooks (e.g., `useMediaQuery`, `useTypingEffect`)
   - `pages/` — top-level pages (e.g., `Home.jsx`)

 ## Deployment
 Deploy to static hosting (Vercel, Netlify, GitHub Pages). Typical steps:
 1. Build: `npm run build`
 2. Publish the `dist` (or `build`) folder produced by Vite

 ## Customization
 - Replace content in `src/data/` (e.g., `personal.js`, `projects.js`) with your information.
 - Update styling in `src/index.css` or adjust component styles.

 ## Contributing
 Contributions, issues, and feature requests are welcome. For large changes, please open an issue first to discuss.

 ## License
 This project is provided as-is. Add a license of your choice (e.g., MIT).
