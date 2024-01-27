/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/Details',
            destination: '/app/a/a',
          },
        ]
      },
}

module.exports = nextConfig
