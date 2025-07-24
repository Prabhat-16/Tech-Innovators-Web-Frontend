# MIT Tech Innovators Club Website

A modern, responsive website for the MIT Tech Innovators Club built with React, Vite, and Tailwind CSS.

## Features

- 🎨 **Dynamic Theme System** - 5 different color themes with real-time switching
- 🌓 **Dark/Light Mode** - Toggle between dark and light themes
- 📱 **Responsive Design** - Optimized for all device sizes
- ⚡ **Fast Performance** - Built with Vite for optimal loading speeds
- 🎭 **Gradient Animations** - Beautiful animated backgrounds and text effects
- 🔧 **Environment Configuration** - Easy customization via environment variables

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd my-tech-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   
4. Edit the `.env` file with your configuration

5. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

Copy `.env.example` to `.env` and customize the values for your organization.

## Building for Production

```bash
npm run build
```

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
