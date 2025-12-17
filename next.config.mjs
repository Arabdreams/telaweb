/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static export
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["tela-assets.s3.me-south-1.amazonaws.com"],
    unoptimized: true // <-- DISABLE Image Optimization for static export
  },
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: true,
      cssProp: true,
      minify: true,
    },
  },
};

export default nextConfig;
