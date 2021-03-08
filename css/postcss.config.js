module.exports = {
    plugins: [
      require('autoprefixer')({
        overrideBrowserslist: ["> 0.5% in US", "Safari > 9"]
        }),
      ...process.env.HUGO_ENVIRONMENT === 'production'
        ? [purgecss]
        : []
    ]
  }