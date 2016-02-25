var webpack = require('webpack');
var path = require('path');
module.exports = {  
    entry: [
      "./app/js/main.js"
    ],
    output: {
        path: path.resolve(__dirname, "app"),
        // publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
          {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015', 'react']
            }
          }
        ]
    },
    // resolveLoader: {
    //     root: path.join('node_modules')
    // },
    plugins: [
        new webpack.NoErrorsPlugin()
        // new webpack.DefinePlugin({
        //     "process.env": {
        //         NODE_ENV: JSON.stringify("production")
        //     }
        // });
    ]

};