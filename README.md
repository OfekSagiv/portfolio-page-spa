# 📦 My Portfolio Website

This is a personal portfolio website project built as a modern Single Page Application (SPA) using **React**, **Vite**, and **Material-UI (MUI)**.

The project follows production-grade standards with a strong emphasis on clean code structure, full separation of components, styles, and logic, and a clear folder architecture based on responsibilities.

## 🔑 Key Principles

- **Modular Structure:**  Each component lives in its own folder with separate style files, making the codebase easy to scale and maintain.

- **Clean Separation:**  Logic and styling are kept apart using CSS-in-JS (Styled Components, MUI), ensuring clarity and reusability.

- **Responsive Design:**  Optimized for all screen sizes with a mobile-first approach and smooth UX across devices.

- **Modern Code Standards:**  Built using React hooks, consistent naming, and best practices from React and MUI ecosystems.

- **Production-Ready:** Fully structured for deployment, including organized folders, config management, and clear separation of concerns.

- **EmailJS Integration:** Contact form is powered by EmailJS, allowing users to send messages without a backend.

This project is great for developers looking to present their work professionally or learn how to build a real-world SPA.
--

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/OfekSagiv/portfolio-page-spa.git
   cd portfolio-page-spa
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
    - If you want to use the contact form with EmailJS, copy `.env.sample` to `.env` and fill in your EmailJS credentials.

### Running the App

- **Development mode (with hot reload):**
  ```bash
  npm run dev
  ```

- **Production build:**
  ```bash
  npm run build
  ```

## Customization

- **Sections:**  
  Edit or add sections in `src/components/` and update `src/constants/section.js` and `src/components/shared/section/sectionObject.jsx` as needed.

- **Theme:**  
  Customize colors and typography in `src/theme/theme.js`.

- **Content:**  
  Update your personal info, skills, and projects in the files under `src/constants/`.

---
