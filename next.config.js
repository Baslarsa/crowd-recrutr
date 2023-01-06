/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "thispersondoesnotexist.com",
      "this-person-does-not-exist.com",
      "placekitten.com",
    ],
  },
};

module.exports = nextConfig;
