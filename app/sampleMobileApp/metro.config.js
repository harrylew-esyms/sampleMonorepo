const path = require('path');

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  //Ensure any imports inside the shared/components folder resolve to the local node_modules folder
  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => path.join(process.cwd(), `node_modules/${name}`),
      },
    ),
  },
  /**
   * Add out workspace roots so that react native can find the source code for the included packages in the monorepo
   */
  projectRoot: path.resolve(__dirname),
  watchFolders: [path.resolve(__dirname, '../shared')],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
