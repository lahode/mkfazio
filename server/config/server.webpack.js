const root = require('app-root-path').path;
// all webpack import working cause we use Ionicframewok in front-side
// Ionic allready have install all default webpack dependencies into our node_modules
// Do simply import with require(WEBPACK_MODULE_PLUGIN_YOU_NEED);
// If plugin do not exist, just add it to ou project package devDependencies
// with $ npm install --save-dev WEBPACK_MODULE_PLUGIN_YOU_NEED
var webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ModuleConcatPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');

// define server config
const SERVER_CONFIG = {
  entry_path: `${root}`, // server entry folder
  entry_file: `${root}/server.ts`, // server entry start file
  output: `${root}/dist`, // server output folder
  node_modules: `${root}/node_modules`, // node_modules folder
}

// define common webpack config for "prod" and "dev" environment
const config = {
  entry: SERVER_CONFIG.entry_file,
  target: 'node',
  externals: [
    /^[a-z\-0-9]+$/ // Ignore node_modules folder
  ],
  resolve: {
      // Add in `.ts` and `.tsx` as a resolvable extension.
      extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
      modules: [SERVER_CONFIG.node_modules]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  output: {
    filename: 'server-prod.js', // output file
    path: SERVER_CONFIG.output,
    libraryTarget: "commonjs",
  },
  module: {
    loaders: [{
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      test: /\.tsx?$/,
      exclude:[
        SERVER_CONFIG.node_modules
      ],
      loader: 'awesome-typescript-loader',
      options: {
          configFileName: SERVER_CONFIG.entry_path+'/tsconfig.json',
          sourceMap: true
      }
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
};

// export webpack config
module.exports = (env)=> {
  return config;
}
