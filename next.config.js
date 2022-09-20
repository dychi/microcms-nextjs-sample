/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Webpack設定
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.(glsl|vert|frag)$/,
  //     loader: 'ts-shader-loader',
  //   })
  //   return config
  // },
}

module.exports = nextConfig
