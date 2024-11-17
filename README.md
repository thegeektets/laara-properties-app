# Laara Properties App: React + Vite

**Live Demo**: [laara-properties.web.app](https://laara-properties.web.app/)

This app provides a modern property listing interface with search and filter capabilities, built using **React** and **Vite**. It features responsive design elements powered by **Ant Design (AntD)** and is hosted on **Firebase**.

## Features

- **Fast Development**: Powered by Vite with React Fast Refresh.
- **Modern UI**: Components styled using Ant Design.
- **Firebase Hosting**: Seamlessly deployed for easy access.

## Setup & Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/laara-properties-app.git
   cd laara-properties-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start Development Server**:

   ```bash
   npm run dev
   ```

4. **Build for Production**:

   ```bash
   npm run build
   ```

5. **Deploy to Firebase**:

   ```bash
   firebase deploy
   ```

## Directory Structure

```
laara-properties-app/
├── public/                    # Firebase Hosting output folder
├── src/                       # React source code
│   ├── App.jsx                # Main component
│   ├── components/            # UI components
│   └── assets/                # Static files like images
├── node_modules/              # Project dependencies
├── package.json               # Project configuration
├── vite.config.js             # Vite configuration
├── firebase.json              # Firebase Hosting configuration
├── .gitignore                 # Git ignore configuration
└── README.md                  # This file
```

## Using Ant Design

Install Ant Design and import components as needed:

```bash
npm install antd
```

```jsx
import { Button } from 'antd';

<Button type="primary">Click Me</Button>;
```

## Firebase Hosting Setup

1. **Initialize Firebase**:

   ```bash
   firebase init
   ```

   - Select **Firebase Hosting**.
   - Use `public` as the output directory.
   - Configure it for a single-page app (SPA) by rewriting all routes to `index.html`.

2. **Deploy**:

   ```bash
   firebase deploy
   ```

---

Happy coding!
