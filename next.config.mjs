import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports
  output: "export", // ← This is key for static sites

  // Required for static exports with images
  images: {
    unoptimized: true, // ← Disables Image Optimization API
  },

  reactStrictMode: true,
  transpilePackages: [
    "three",
    "react-three-fiber",
    "@react-three/drei",
    "framer-motion",
    "three-globe",
  ],

  // Disable these for static exports
  experimental: {
    esmExternals: false, // ← Changed from "loose"
  },

  // Keep source maps (they'll be generated during build)
  productionBrowserSourceMaps: true,
};

const sentryWebpackPluginOptions = {
  // ... (keep your existing Sentry config) ...
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
