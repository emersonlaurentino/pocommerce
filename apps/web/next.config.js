const withPocommerce = require("@pocommerce/core")({
  provider: "vtex",
  account: "storeframework",
  edition: "@pocommerce/edition-fashion",
  editionConfig: "./edition.config.tsx",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPocommerce(nextConfig);
