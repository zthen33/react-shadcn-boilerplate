# 🧩 React + TailwindCSS + Shadcn-Style Boilerplate

A lightweight starter template using:

- ✅ React + JSX
- ✅ Tailwind CSS v3
- ✅ Vite
- ✅ Prebuilt shadcn-style UI components
- ✅ Class-based styling with `class-variance-authority` + `tailwind-merge`

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/zthen33/react-shadcn-boilerplate.git
cd react-shadcn-boilerplate

### 2.Install dependencies

npm install


### 3. Run the dev server

npm run dev


### 4. Folder Structure

react-shadcn-boilerplate/
├── public/
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── button.jsx
│   │       └── input.jsx
│   ├── lib/
│   │   └── utils.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md


### 🔧 Configuration

+ TailwindCSS
Includes @tailwindcss/forms plugin and custom theme with Inter font and a primary color.

+ Alias
@ resolves to ./src for cleaner imports.

+ PostCSS
Includes autoprefixer and tailwindcss.


### 🧩 Components

Component	Description
Button	Styled variant button (cva)
Input	Styled input with forms plugin
Utilities like cn() in lib/utils.js help merge Tailwind classes easily.

