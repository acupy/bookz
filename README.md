## React App

### Start React app

`npm start`

Starts the regular create-react-app on `localhost:3000/`

### Build for React app

`npm run build`

Builds production build for react app. I use [serve](https://www.npmjs.com/package/serve) to run this production build.

## Cordova App

### Build for Cordova app

`npm run build:cordova`

builds the app by appending tags to index.html which will be needed for cordova builds

### Browser Platform

#### Add Browser platform

`cordova platform add browser`

#### Browser Build

`cordova browser build`

>Note: *This build needs www directory which is created from `npm run build:cordova`*

#### Run in Browser

`cordova run browser`

Runs the browser build in browser at `localhost:8000`

### Other Platforms

Commands will be similar to as browser platform. cordova platforms [guide](https://cordova.apache.org/docs/en/4.0.0/guide/platforms/).
