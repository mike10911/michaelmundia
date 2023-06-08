/** @type {import('next').NextConfig} */

const nextConfig = {}

module.exports = nextConfig

const withImages = Image
module.exports = withImages({
  inlineImageLimit: false
})

module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name]-[hash].[ext]',
          },
        },
      ],
    });
    return config;
  },
};
