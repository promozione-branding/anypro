/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
   images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-7d937c7331834e4a9e6d3a588b9bfa59.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
