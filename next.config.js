/** @type {import('next').NextConfig} */

const imagesDomain = process.env.NEXT_PUBLIC_IMAGES_DOMAIN

const nextConfig = {
  images: {
    domains: [imagesDomain]
  }
}

module.exports = nextConfig
