const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
// next.config.js
module.exports = withBundleAnalyzer({
  images: {
    domains: [
      'dl.airtable.com'
    ]
  }
})