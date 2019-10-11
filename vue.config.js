// vue.config.js
module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  publicPath: process.env.NODE_ENV === 'production' ? '/terafunding-test/' : '/',
  outputDir: 'docs',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/_import/variable.scss";`
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
