/** @type {import('next').NextConfig} */
const nextConfig = {

  reactCompiler: true,
  cacheComponents: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  images: {
    remotePatterns: [
      new URL("https://avatars.githubusercontent.com/u/119115304?v=4"),
      new URL("https://rkxgtjwphltwxbpgxhti.supabase.co/storage/v1/object/public/project_images/**/**/**")
    ],
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: "https://rkxgtjwphltwxbpgxhti.supabase.co",
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY:
      "sb_publishable_TBzMgN-PSr8ruOiAmYC5oA_sSbfV1Va",
    RESEND_MAILLER_KEY: "re_SoK7bvp6_FVNiBhfXR6y4svsmqQfWnYfW"
  },
};

export default nextConfig;
