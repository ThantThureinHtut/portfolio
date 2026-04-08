/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  images: {
    remotePatterns: [new URL('https://avatars.githubusercontent.com/u/119115304?v=4')],
  },
};

export default nextConfig;
