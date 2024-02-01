module.exports = {
  defaultLocale: 'pt-br',
  i18n: {
    locales: ['default', 'en', 'pt-br'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/index'
      },
    ]
  }
}