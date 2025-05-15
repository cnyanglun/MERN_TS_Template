module.exports = {
  entry: './client/src/index.tsx',  // 修改入口为tsx文件
  output: {
    path: __dirname + '/client/public/js',
    filename: 'bundle.js'
  },
  module: {
    rules: [  // loaders改成rules，webpack3支持
      {
        test: /\.(ts|tsx)$/,    // 支持ts和tsx
        use: 'ts-loader',       // 用ts-loader替代babel-loader
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']  // 自动识别这些后缀
  }
};
