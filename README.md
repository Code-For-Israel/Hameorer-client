# Hameorer App

Some key features include:
- Self Guide - הדרכה עצמית
- DID - דמות
- Feature 3 (TBD)
- Feature 4 (TBD)

## Installation and Setup

To install and set up Hameorer Client, follow these steps:

1. Install [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com/).
2. Install the [Expo](https://expo.dev/) command line tools with `npm install expo-cli --global`.
3. Clone this repository to your local machine with `git clone git@github.com:Code-For-Israel/Hameorer-client.git`.
4. Navigate to the `Hameorer-client` directory and install the app dependencies with `npm install`.

## Usage
For web :



                                                npx expo start -w


## Expo snack preview for Android and IOS
https://snack.expo.dev/@syahbes/hameorer-23-01-23






</br>
</br>
</br>
</br>
</br>

#### Notes

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
