var path = require('path');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var packageJson = require('./package.json');


var plugins = [new UglifyJSPlugin()];

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: packageJson.name + ".min.js",
        library: packageJson.libraryName,
        libraryTarget: 'umd'
    },
    target: 'node',
    externals: {
        jsonwebtoken: {
            commonjs: 'jsonwebtoken',
            commonjs2: 'jsonwebtoken',
            amd: 'jsonwebtoken',
            root: 'jsonwebtoken'
        }
    },
    plugins: []
}