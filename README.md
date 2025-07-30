# MIT Tech Innovators Club Website

A modern, responsive website for the MIT Tech Innovators Club built with React, Vite, and Tailwind CSS.

## Features

- 🎨 **Dynamic Theme System** - 5 different color themes with real-time switching
- 🌓 **Dark/Light Mode** - Toggle between dark and light themes
- 📱 **Responsive Design** - Optimized for all device sizes
- ⚡ **Fast Performance** - Built with Vite for optimal loading speeds
- 🎭 **Gradient Animations** - Beautiful animated backgrounds and text effects
- 🔧 **Environment Configuration** - Easy customization via environment variables

## Technologies Used

- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
├── styles/        # Global styles and Tailwind config
└── assets/        # Images, fonts, and other static files
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd tech-innovator
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

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## Environment Variables

Copy `.env.example` to `.env` and customize the values for your organization.

### Required Variables

```env
VITE_APP_TITLE=MIT Tech Innovators Club
VITE_APP_DESCRIPTION=Official website for the MIT Tech Innovators Club
VITE_APP_URL=https://your-domain.com
```

## Building for Production

```bash
npm run build
```

The build files will be created in the `dist` folder, ready for deployment.

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### Manual Deployment

1. Run `npm run build`
2. Upload the contents of the `dist` folder to your web server
3. Configure your server to serve `index.html` for all routes (SPA routing)

## Contributing

We welcome contributions from the MIT Tech Innovators Club community!

### How to Contribute

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

### Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation if needed

## Club Information

The MIT Tech Innovators Club is dedicated to fostering innovation and technology advancement within the MIT community. Our website serves as a central hub for:

- **Event Announcements** - Stay updated on upcoming tech events
- **Member Networking** - Connect with fellow innovators
- **Project Showcases** - Share and discover innovative projects
- **Resource Sharing** - Access tech resources and learning materials

## Support

For questions or support, please contact:
- Email: tech-innovators@mit.edu
- Discord: [MIT Tech Innovators Server]
- GitHub Issues: [Create an issue](https://github.com/your-org/tech-innovator/issues)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
