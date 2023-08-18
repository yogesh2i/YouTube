/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ytimg.com',
          },
          {
            protocol: 'https',
            hostname: 'yt3.ggpht.com',
          },
          {
            protocol: 'https',
            hostname: 'www.youtube.com',
          },
        ],
      },
   
}

module.exports = nextConfig
