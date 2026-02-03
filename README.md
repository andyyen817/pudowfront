# AirKOP Website Project

This project is the frontend for the AirKOP (pudow) website, built with React, Vite, and Tailwind CSS.

## Prerequisites

- Node.js (v16 or higher)
- npm (Node Package Manager)

## Getting Started

1.  **Navigate to the project directory:**
    ```bash
    cd pudow-website
    ```

2.  **Install dependencies:**
    (Already done, but if moving to a new machine)
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Build for Production

To create a production-ready build:

```bash
npm run build
```

The output files will be in the `dist` directory. These files can be deployed to any static hosting service (Vercel, Netlify, Nginx, etc.).

## Project Structure

-   `src/components`: Reusable UI components (Navbar, Footer, etc.)
-   `src/pages`: Page components (Home, Products, JoinUs, Login)
-   `src/locales`: Localization files (en.json, zh.json, id.json)
-   `src/App.jsx`: Main application component with Routing
-   `src/main.jsx`: Entry point

## Features Implemented

-   **Multi-language Support**: English, Simplified Chinese, Indonesian.
-   **Responsive Design**: Mobile-friendly Navbar and Layout.
-   **Pages**:
    -   Home (Brand introduction, Mission, Partner)
    -   Products (SmartWater Station, ATMWater Refill Station)
    -   Join Us (Water Steward, Regional Partner Recruitment)
    -   Login (Water Steward Portal)
-   **Interactions**:
    -   Floating WhatsApp Button
    -   Login Button in Navbar
    -   Language Switcher

## Customization

-   **Images**: Replace placeholder images/backgrounds in the components.
-   **Colors**: Customize `tailwind.config.js` if needed, currently using standard Blue/Gray palette matching the brand description.
-   **Content**: Edit `src/locales/*.json` to update text content.

