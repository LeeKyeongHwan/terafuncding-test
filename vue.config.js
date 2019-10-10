// vue.config.js
module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
