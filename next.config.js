module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/v2/:path*',
        destination: 'https://di8.blanktech.net/api/v2/:path*',
      },
    ]
  },
  // experimental: {
  //   concurrentFeatures: true,
  //   serverComponents: true,
  // },
}