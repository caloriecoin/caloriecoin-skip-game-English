module.exports = (api) => {

  api.cache(true);

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins:[
      ['module-resolver',
        {
          root: ["./src"],
          extensions: [
            '.ios.js',
            '.android.js',
            '.ios.jsx',
            '.android.jsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            "@": "./src",
            "@components": "./src/components",
            "@container" : "./src/container",
            "@view": "./src/view",
            "@redux": "./src/store"
          }
        }
      ],
      'react-native-reanimated/plugin'
    ]
  }
};