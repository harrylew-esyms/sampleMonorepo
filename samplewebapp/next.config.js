const path = require('path');

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

const exportModule = {
  webpack: (config, { defaultLoaders }) => {
    // config.resolve.alias = {
    //   ...(config.resolve.alias || {}),
    //   //Transform all direct use of 'react-native' imports to 'react-native-web'
    //   'react-native$': path.join(__dirname, 'node_modules', 'react-native-web'),
    // };

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
    };

    config.resolve.modules = [
      ...config.resolve.modules,
      path.resolve(__dirname, 'node_modules'),
    ];

    config.resolve.symlinks = false;

    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ];

    config.module.rules.push({
      test: /\.+(js |jsx)$/,
      use: defaultLoaders.babel,
      include: [path.resolve(__dirname, '..', 'shared')],
    });

    return config;
  },
};

module.exports = exportModule;
