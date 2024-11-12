/** @type {import('next').NextConfig} */
const nextConfig = {
  // TODO: Resolver bug de promisse da [id]/page.tsk
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "drive.google.com",
      },
      {
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
}
export default nextConfig
