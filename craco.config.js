// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@interface': path.resolve(__dirname, 'src/interface'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@utils': path.resolve('src/utils'),
      '@service': path.resolve(__dirname, 'src/service'),
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
      return config
    },
  },
}
