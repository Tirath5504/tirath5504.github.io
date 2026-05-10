/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export when building on GitHub Actions
  output: process.env.GITHUB_ACTIONS ? 'export' : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
