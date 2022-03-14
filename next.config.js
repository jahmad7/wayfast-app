module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/pages/book-a-demo",
        destination: "/demo",
        permanent: true,
      },
    ];
  },
};
