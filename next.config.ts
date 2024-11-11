/** @type {import('next').NextConfig} */
const nextConfig = {
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
