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
          {
            protocol: 'https',
            hostname: 'yt3.googleusercontent.com',
          },
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com'
          }
        ],
      },
    env:{
      NEXT_PUBLIC_SECRET_KEY : '6d08210ef4msh1e2294ffb752a98p1b13b5jsne3c9592016b1'
    }
   
}

module.exports = nextConfig
