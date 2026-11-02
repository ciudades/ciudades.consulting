/** @type {import('next').NextConfig} */

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
      // use: [{ loader: '@svgr/webpack', options: { icon: true } }]
    })

    return config
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.ctfassets.net" }
    ]
  }
}
