const px2rem = require('postcss-px2rem')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    autoprefixer(),
    px2rem({
      remUnit: 200
    })
  ]
}
