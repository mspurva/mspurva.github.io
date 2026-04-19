import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your repository is not a username.github.io site, you might need a basePath
  // basePath: '/your-repo-name',
};

export default nextConfig;
