# 🚀 Professional Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS v4.1. This portfolio showcases a developer's skills, projects, and experience with a professional design and smooth user experience.

## ✨ Features

### 🎨 Design & UI

-   **Modern Design**: Clean, professional layout with smooth animations
-   **Dark/Light Mode**: Toggle between themes with persistent preference
-   **Responsive**: Fully responsive design for all devices
-   **Glassmorphism**: Modern glass effects and backdrop blur
-   **Smooth Animations**: Intersection Observer-based animations
-   **Custom Scrollbar**: Styled scrollbar that adapts to theme

### 📱 Sections

-   **Hero Section**: Eye-catching introduction with profile photo and CTA buttons
-   **About Me**: Detailed personal introduction and journey
-   **Skills**: Interactive skill bars with categorized technologies
-   **Projects**: Featured projects with filtering and detailed modals
-   **Contact**: Professional contact form with multiple contact methods
-   **Footer**: Complete footer with quick links and social media

### 🛠️ Technical Features

-   **Theme Context**: Professional theme management with data-theme approach
-   **Custom Hooks**: Reusable hooks for scroll tracking, intersection observer, etc.
-   **Component Library**: Reusable UI components (Button, Card, Modal, ProgressBar)
-   **Utility Functions**: Helper functions for common operations
-   **SEO Optimized**: Proper meta tags and semantic HTML
-   **Performance Optimized**: Lazy loading and smooth interactions

## 🚀 Getting Started

### Prerequisites

-   Node.js (v16 or higher)
-   npm or yarn

### Installation

1. **Clone the repository**

    ```bash
    git clone <your-repo-url>
    cd portfolio
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Start development server**

    ```bash
    npm run dev
    ```

4. **Build for production**
    ```bash
    npm run build
    ```

## 📝 Customization

### 1. Update Personal Information

Edit `src/data/portfolioData.js` to customize:

-   Personal details (name, title, bio, contact info)
-   Social media links
-   About me content
-   Skills and proficiency levels
-   Education details
-   Work experience
-   Project information

### 2. Add Your Photos

-   Replace placeholder images in the `public` folder
-   Update image paths in `portfolioData.js`
-   Add your professional photo
-   Add project screenshots

### 3. Update Resume

-   Add your resume PDF to the `public` folder
-   Update the resume path in `portfolioData.js`

### 4. Customize Theme Colors

Edit `tailwind.config.js` to change:

-   Primary and secondary color schemes
-   Custom animations
-   Typography settings

### 5. Add More Sections

Create new section components in `src/components/sections/` following the existing pattern.

## 🎨 Theme Customization

The portfolio uses Tailwind CSS v4.1 with a custom theme system:

```css
/* Custom theme utilities */
.theme-bg-primary {
    background-color: var(--color-bg-primary);
}
.theme-text-primary {
    color: var(--color-text-primary);
}
.theme-accent {
    color: var(--color-accent);
}
```

Theme switching is handled by the `data-theme` attribute on the document element.

## 📁 Project Structure

```
src/
├── components/
│   ├── UI/                 # Reusable UI components
│   ├── sections/           # Page sections
│   └── Navbar.jsx         # Navigation component
├── contexts/              # React contexts (Theme)
├── data/                  # Portfolio content data
├── hooks/                 # Custom React hooks
├── pages/                 # Page components
├── routes/                # Routing configuration
└── utils/                 # Utility functions
```

## 🚢 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Vite project
3. Deploy with default settings

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
    ```json
    "deploy": "gh-pages -d dist"
    ```
3. Run: `npm run build && npm run deploy`

## 🎯 Portfolio Requirements Checklist

✅ **Navigation Bar**: Responsive with smooth scrolling
✅ **Professional Photo**: Hero section with profile image
✅ **Resume Download**: Functional download button
✅ **Social Links**: GitHub, LinkedIn, Twitter, Email
✅ **About Me Section**: Personal journey and interests
✅ **Skills Section**: Visual skill representation
✅ **Education**: Educational background display
✅ **Experience**: Professional experience (if applicable)
✅ **Projects**: 3+ projects with detailed information
✅ **Contact Form**: Functional contact form
✅ **Footer**: Professional footer with links
✅ **Responsive Design**: Mobile, tablet, desktop support
✅ **Theme Toggle**: Dark/light mode switching

## 🛠️ Technologies Used

-   **Frontend**: React 19, Vite 7
-   **Styling**: Tailwind CSS v4.1
-   **Routing**: React Router v7
-   **Icons**: Heroicons (SVG)
-   **Animations**: CSS transitions + Intersection Observer
-   **Theme**: Custom theme system with CSS variables

## 📧 Contact & Support

If you need help customizing this portfolio or have questions:

-   **Email**: mdjihadhossain793@gmail.com
-   **GitHub**: [https://github.com/codewithjihad1](https://github.com/codewithjihad1)
-   **LinkedIn**: [https://www.linkedin.com/in/codewithjihad1/](https://www.linkedin.com/in/codewithjihad1/)

---

**Made with ❤️ by MD JIHAD HOSSAIN**

Ready to showcase your skills to the world! 🌟+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
