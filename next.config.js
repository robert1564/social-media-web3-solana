/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.dicebear.com',
      'avatars.githubusercontent.com',
      'api.dicebear.com',
      'upload.wikimedia.org',
      'www.dmarge.com',
      'cdn-icons.flaticon.com',
      'kajabi-storefronts-production.kajabi-cdn.com',
      'www.cityam.com',
      'yt3.ggpht.com',
      'media-exp1.licdn.com',
      'scontent-lax3-1.xx.fbcdn.net',
      'images.unsplash.com',
      'unsplash.com',
      'source.unsplash.com',
      'ibb.co',
      'i.ibb.co'
    ],
  },
}

module.exports = nextConfig
