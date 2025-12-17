/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <-- enables full static export
  images: {
    domains: ["tela-assets.s3.me-south-1.amazonaws.com"],
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
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
