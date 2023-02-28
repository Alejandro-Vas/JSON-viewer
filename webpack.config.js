const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devOptions = {
  devServer: {
    static: './dist',
    port: 8000,
  },
};

module.exports = ({ development }) => ({
  entry: development ? './example/src/index.tsx' : './src/index.tsx',
  devtool: development ? 'inline-source-map' : false,
  mode: development ? 'development' : 'production',
  optimization: !development ? {
    minimize: true,
    usedExports: true,
  } : {},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
        exclude: /node_modules/,
      },
    ],
  },
  externals: !development ? {
    react: {
      commonjs: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  } : {},
  plugins: development ? [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './example/public/index.html'),
      filename: path.resolve(__dirname, './dist/index.html'),
    }),
  ] : [],
  ...(development && devOptions),
});
