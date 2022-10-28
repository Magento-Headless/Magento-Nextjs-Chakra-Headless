const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.REACT_APP_BUNDLE_VISUALIZE === '1'
})

const isProd = process.env.NODE_ENV === 'production'

module.exports = (phase, { defaultConfig }) => {
  //** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
  }

  return isProd ? withBundleAnalyzer(nextConfig) : nextConfig
}
