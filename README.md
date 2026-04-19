# Dynamic Content Builder

A modular, React-based Mini-CMS (Content Management System) that allows users to dynamically construct and reorder page layouts using customizable content blocks. 

This project was built to demonstrate robust state management, component modularity, and seamless data persistence.

## Live Demo
[Insert your Netlify Live URL here]

## Key Features

* **Dynamic Block Management:** Users can add multiple content blocks to the canvas, including Main Headers, Rich Text paragraphs, Image Elements (via URL), and Markdown text areas.
* **Vertical Reordering:** A custom array-manipulation algorithm allows users to shift blocks up and down the canvas seamlessly without losing input data.
* **Real-Time Data Persistence:** The application state is tied to the browser's `localStorage` via a custom React hook (`usePageData`). Any changes, additions, or reordering are saved instantly. If the user refreshes or closes the browser, their exact layout is restored.
* **Premium UI/UX:** Designed with a professional "workspace" aesthetic featuring a dark-mode component library, a light-mode canvas, soft focus states, and empty-state fallbacks to guide the user.

## Technical Stack

* **Frontend Framework:** React.js (Hooks: `useState`, `useEffect`)
* **Styling:** Tailwind CSS (Implemented via CDN for rapid, dependency-free styling)
* **Icons:** `lucide-react`
* **Deployment:** Netlify (Configured with a `_redirects` file for stable SPA routing)

## Project Architecture

The codebase is highly modular, separating the logic (hooks) from the visual components (UI):

```text
content-builder/
├── public/
│   ├── index.html           # Includes custom pre-loader and Tailwind CDN
│   └── _redirects           # Handles Netlify routing
├── src/
│   ├── components/
│   │   ├── Palette.js       # The sidebar library of available blocks
│   │   └── Canvas.js        # The main workspace mapping the active blocks
│   ├── hooks/
│   │   └── usePageData.js   # Centralized logic for state and Local Storage
│   ├── App.js               # Main layout and state distribution
│   └── index.js             # React entry point
└── package.json