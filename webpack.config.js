const path = require('path');
const hwp = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {    
      index: {
        import: './src/index.js',
        dependOn: 'shared',
      },
      another: {
        import: './src/another-module.js',
        dependOn: 'shared',
      },
      shared: 'lodash',
    },
    output : {
        filename : '[name].build.js',
        path : path.join(__dirname, '/dist') 
    },
    devServer:{
        port: 3000,
        inline: true,
        contentBase: './dist'
    },
    module : {
        rules : [
            {
                exclude : (/node_modules/),
                test : /\.js$/,
                use : {
                    loader : "babel-loader",
                    options : {
                        presets : ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/i,
                exclude : (/node_modules/),
                use: ["css-loader"],
              }
        ]
    },
    plugins : [
        new hwp({
            template : path.join(__dirname, '/public/index.html')
        })
    ],
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
    },
}