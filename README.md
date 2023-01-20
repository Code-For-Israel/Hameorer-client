# Hameorer App
Hameorer mobile App 

don't forget to npm install
and you can run on web with this command:
npx expo start -w


----

Hameorer mobile App 

Some key features include:
- Self Guide
- Feature 2 (TBD)
- Feature 3 (TBD)

## Installation and Setup

To install and set up Hameorer Client, follow these steps:

1. Install [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com/).
2. Install the [Expo](https://expo.dev/) command line tools with `npm install expo-cli --global`.
3. Clone this repository to your local machine with `git clone git@github.com:Code-For-Israel/Hameorer-client.git`.
4. Navigate to the `Hameorer-client` directory and install the app dependencies with `npm install`.

## Usage

To use My Awesome App, follow these steps:

1. Run the app in development mode with `npm start`.
2. Open the app in the [Expo](https://expo.dev/) client app on your mobile device.
3. You can run it on the browser with 'w'
3. Use the app to do amazing things.

## Live Link
https://snack.expo.dev/@syahbes/hameorer-01-01-2023
Live preview for Web, android and IOS


11/01
to fix some issues had to :

first :
npx expo install react-native-reanimated

then :
npm install --save-dev @babel/plugin-proposal-export-namespace-from

and add this to babel.config.js

plugins: [    
  '@babel/plugin-proposal-export-namespace-from',
  'react-native-reanimated/plugin',
],

                                                expo start -w

so it would look like this:
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [    
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
    ],
    
  };
};
