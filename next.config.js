module.exports = {
  trailingSlash: true,
  async redirect() {
    return [
      {
        source: '/',
        destination: '/home'
      },
    ]
  }
}