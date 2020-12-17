import path from "path"
import { Configuration } from "webpack"
import CopyWebpackPlugin from 'copy-webpack-plugin'

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

const config: Configuration = {
    mode,
    entry: {
        content: './src/content.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: "static", to: "." }
            ]
        })
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
}

export default config