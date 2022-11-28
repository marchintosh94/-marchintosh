const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
// next.config.js
module.exports = withBundleAnalyzer({
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'dl.airtable.com',
      'v5.airtableusercontent.com'
    ]
  }
})