/** @type {import('next').NextConfig} */
const nextConfig = {
    // ... existing config
  experimental: {
    serverComponentsExternalPackages: ['@vercel/blob']
  },
  // Required for Vercel Blob
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com'
      }
    ]
  }
};

export default nextConfig;