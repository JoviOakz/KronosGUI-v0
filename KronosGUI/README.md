# Libraries used in this project

### This project is made in React-Vite:
- npm create vite@latest
- npm i
- npm run dev

## Main libraries:

### Tailwind css:
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p

**In the arquive tailwind.config.js, put the code below:**

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**In the arquive index.css, put the code below:**

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**RouterDOM:**
- npm install react-router-dom

**In the src/main.jsx, put the code below:**

```
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

## Other libraries:
- npm install react-fast-marquee --save
- npm install react-dropdown  --save

## Future implementations
- Vercel
- Updated videos

## Doubts
- [x] How to reload the page after clicking on a link?
- [] How to reload the page after selecting a value on the dropdown? (same page who you in)
- [] How to make the page slide down after pressing Get Started?