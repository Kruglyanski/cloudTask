module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: [
          ["module:react-native-dotenv", {
            "moduleName": "react-native-dotenv"
          }],
          'react-native-paper/babel',
          ['module-resolver',
          {
            root: ['./src'],
            extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
            alias: {
              "tests": ["./tests/"],
              "@components": "./src/components",
            }
          }]
        ]
      },
      development: {
        plugins: [["module:react-native-dotenv", {
          "moduleName": "react-native-dotenv"
        }]
        ]
      },
    },
  };
};
