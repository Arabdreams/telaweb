/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: ['tela-assets.s3.me-south-1.amazonaws.com'],
      },
    
    // distDir: "dist",
    // output: "export",
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
