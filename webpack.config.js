// webpack.config.js

const webpack = require('webpack');
const path = require('path');

module.exports ={
    entry: path.join(__dirname, 'src', 'app-client.js'),
    output: {
        path: path.join(__dirname, 'src', 'static', 'js'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: path.join(__dirname, 'src'),
            loader: ['babel-loader'],
            query: {
                cacheDirectory: 'babel_cache',
                presets: ['react', 'es2015']
            }
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            mangle: true,
            sourcemap: false,
            beautify: false,
            dead_code: true
        })
    ]
};

/*In the first part of the configuration file we define what is the entry point and the otput file. The entry point is the main JavaScript file that initializes the application. Webpack will recursively resolve all the included/imported resources to determine which files will go into the final bundle.

The module.loaders section allows to specify transformations on specific files. Here we want to use Babel with the react and es2015 presets to convert all the included JavaScript files to ES5 code.

In the final section we use plugins to declare and configure all the optimizations plugins we want to use:

DefinePlugin allows us to define the NODE_ENV variable as a global variable in the bundling process as if it was defined in one of the scripts. Some modules (e.g. React) relies on it to enable or disable specific features for the current environment (production or development).
DedupePlugin removes all the duplicated files (modules imported in more than one module).
OccurenceOrderPlugin helps in reducing the file size of the resulting bundle.
UglifyJsPlugin minifies and obfuscates the resulting bundle using UglifyJs.
Now we are ready to generate our bundle file, you just need to run: */
