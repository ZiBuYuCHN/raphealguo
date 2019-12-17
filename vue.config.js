const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  configureWebpack: config => {
    config.plugins.push(new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './cloudfunctions'),
        to: path.resolve(__dirname, './dist/mp/cloudfunctions'),
        toType: 'dir'
      },
      {
        from: path.resolve(__dirname, './project.config.json'),
        to: path.resolve(__dirname, './dist/mp/project.config.json'),
        toType: 'file'
      }
    ]))
  }
}
