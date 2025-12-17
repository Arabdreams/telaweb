/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // fully static export
  reactStrictMode: true,
  experimental: {
    appDir: true,            // app folder enabled
  },
  images: {
    domains: ["tela-assets.s3.me-south-1.amazonaws.com"],
    unoptimized: true,       // disables image optimization for static
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
