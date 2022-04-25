module.exports = {
  env: {
    GA_TRACKING_ID: "UA-148367245-1",
  },
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
