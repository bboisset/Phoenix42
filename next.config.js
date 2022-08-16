/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  include: ["next-env.d.ts", "**/*.ts", "**/*.tsx", "additional.d.ts"],
}

module.exports = nextConfig
