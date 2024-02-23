/** @type {import('next').NextConfig} */
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  images: {
    domains: ["localhost"],
  },
  webpack: (config, { dev }) => {
    if (!dev) {
      if (config.optimization && config.optimization.minimizer) {
        config.optimization.minimizer.push(
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true,
              },
            },
          }),
        );
      }
    }

    return config;
  },
};
