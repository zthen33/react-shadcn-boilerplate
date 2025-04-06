# 🧩 React + TailwindCSS + Shadcn-Style Boilerplate

A lightweight starter template for building modern web applications with:

- ✅ React + JSX
- ✅ Tailwind CSS v3
- ✅ Vite
- ✅ Prebuilt shadcn-style UI components
- ✅ Class-based styling with `class-variance-authority` + `tailwind-merge`

This boilerplate provides a clean, fast, and extensible foundation for your next React project, combining the power of Tailwind CSS and reusable UI components inspired by shadcn.

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/zthen33/react-shadcn-boilerplate.git
   cd react-shadcn-boilerplate
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Run the Development Server**

   ```bash
   npm run dev
   ```

4. **Folder Structure**
   react-shadcn-boilerplate/
├── public/               # Static assets (e.g., favicon, images)
├── src/                  # Source code
│   ├── components/       # Reusable components
│   │   └── ui/           # Shadcn-style UI components
│   │       ├── button.jsx  # Button component
│   │       └── input.jsx   # Input component
│   ├── lib/              # Utility functions
│   │   └── utils.js      # Tailwind class merging utilities (e.g., cn())
│   ├── App.jsx           # Main app component
│   ├── index.css         # Global styles
│   └── main.jsx          # Entry point
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation (this file)

**🔧 Configuration**

- Tailwind CSS
  Uses Tailwind CSS v3 with the @tailwindcss/forms plugin for enhanced form styling.
  Custom theme includes:
  Font: Inter
  Primary Color: Configurable in tailwind.config.js
- Path Alias
  @ resolves to ./src for cleaner imports (e.g., import Button from '@/components/ui/button').
- PostCSS
  Configured with autoprefixer and tailwindcss for vendor prefixing and Tailwind integration.

** 🧩 Components **
The boilerplate includes prebuilt, reusable UI components styled with Tailwind CSS and class-variance-authority (cva) for variant-based styling. Utilities like tailwind-merge ensure seamless class merging.

Component Description
Button Styled button with variants (via cva)
Input Styled input field with @tailwindcss/forms

```

```

```

```
