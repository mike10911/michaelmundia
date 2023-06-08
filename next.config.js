/** @type {import('next').NextConfig} */
import Image from 'next/image'
const nextConfig = {}

module.exports = nextConfig

const withImages = Image
module.exports = withImages({
  inlineImageLimit: false
})

module.exports = {
    webpack(config, options) {
      config.module.rules.push({
        test: /\.mp3$/,
        use: {
          loader: 'url-loader',
        },
      });
      return config;
    },
  }; 

