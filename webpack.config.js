const path = require ('path');
module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        app: ['./src/index.js']
    },
    mode: 'development',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /(\.js|.jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
        ]
    }
}