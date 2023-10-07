const withMDX = require("@next/mdx")();

const env = {
  GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
};

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  env,
});

module.exports = nextConfig;
