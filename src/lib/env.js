// Environment configuration utility
export const env = {
  // App Configuration
  APP_NAME: import.meta.env.VITE_APP_NAME || "MIT Tech Innovators Club",
  APP_VERSION: import.meta.env.VITE_APP_VERSION || "1.0.0",
  NODE_ENV: import.meta.env.NODE_ENV || "development",

  // API Configuration
  API_URL: import.meta.env.VITE_API_URL,
  API_KEY: import.meta.env.VITE_API_KEY,

  // Social Media Links
  GITHUB_URL: import.meta.env.VITE_GITHUB_URL || "https://github.com",
  TWITTER_URL: import.meta.env.VITE_TWITTER_URL || "https://twitter.com",
  LINKEDIN_URL: import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com",

  // Contact Information
  CONTACT_EMAIL: import.meta.env.VITE_CONTACT_EMAIL || "hello@mittechinnovators.org",
  CONTACT_PHONE: import.meta.env.VITE_CONTACT_PHONE || "(617) 555-0123",
  CONTACT_ADDRESS: import.meta.env.VITE_CONTACT_ADDRESS || "MIT Campus, Cambridge, MA",

  // Theme Configuration
  DEFAULT_THEME: import.meta.env.VITE_DEFAULT_THEME || "theme-blue-purple",
  ENABLE_THEME_SWITCHER: import.meta.env.VITE_ENABLE_THEME_SWITCHER === "true" || true,

  // Development flags
  isDevelopment: import.meta.env.NODE_ENV === "development",
  isProduction: import.meta.env.NODE_ENV === "production",
};

// Validate required environment variables
export const validateEnv = () => {
  const required = [];
  
  // Add any required environment variables here
  // Example: if (!env.API_KEY) required.push('VITE_API_KEY');
  
  if (required.length > 0) {
    throw new Error(
      `Missing required environment variables: ${required.join(", ")}\n` +
      "Please check your .env file and ensure all required variables are set."
    );
  }
};

export default env;
