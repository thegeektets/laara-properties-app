# Laara Properties App: React + Vite

**Live Demo**: [laara-properties.web.app](https://laara-properties.web.app/)

This is a property listing application built using **React** and **Vite** for efficient development and performance. It features property search, filters, and a modern UI powered by **Ant Design (AntD)**. The app is deployed on **Firebase Hosting**.

## Features

- **Fast Development**: Powered by Vite with React Fast Refresh.
- **Modern UI**: Using Ant Design components for a polished look.
- **Firebase Hosting**: Deployed for quick and secure access.

## Setup Instructions

### Prerequisites

- **Node.js** (v14+)
- **Firebase CLI**: Install with `npm install -g firebase-tools`

### Getting Started

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

### Firebase Hosting Configuration

1. **Initialize Firebase**:

   ```bash
   firebase init
   ```

   - Choose **Firebase Hosting**
   - Set `public` as the output directory
   - Configure for SPA by redirecting all requests to `index.html`

2. **Deploy to Firebase**:

   ```bash
   firebase deploy
   ```

## Using Ant Design

Import and use Ant Design components as needed:

```jsx
import { Button } from 'antd';

<Button type="primary">Click Me</Button>;
```

Install Ant Design:

```bash
npm install antd
```

## Project Structure

```
laara-properties-app/
├── public/                    # Firebase hosting output
├── src/                       # React components and assets
├── package.json               # Project settings
├── vite.config.js             # Vite config
├── firebase.json              # Firebase config
└── README.md                  # Project documentation
```

Happy coding!
