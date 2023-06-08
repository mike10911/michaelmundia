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
        test: /\.mp3$/,
        use: {
          loader: 'url-loader',
        },
      });
      return config;
    },
  }; 

  module.exports = {
    webpack(config, options) {
      const { isServer } = options;
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        exclude: config.exclude,
        use: [
          {
            loader: require.resolve('url-loader'),
            options: {
              limit: config.inlineImageLimit,
              fallback: require.resolve('file-loader'),
              publicPath: `${config.assetPrefix}/_next/static/images/`,
              outputPath: `${isServer ? '../' : ''}static/images/`,
              name: '[name]-[hash].[ext]',
              esModule: config.esModule || false,
            },
          },
        ],
      });
  
      return config;
    },
  };
