/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const withImages = require('next/images')
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

