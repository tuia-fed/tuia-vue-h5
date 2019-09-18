const glob = require('glob')

/**
 * 获取pages下index.ts为入口
 */
function getEntries() {
  const pages = {}
  const files = glob.sync('./src/pages/**/index.ts')
  files.forEach(file => {
    const matchs = /.\/src\/pages\/(.+)\/index.ts/.exec(file)
    const name = matchs[1].replace('/', '-')
    pages[name] = {
      entry: file,
      template: 'public/index.html',
      filename: name + '.html'
    }
  })
  return pages
}

const pages = getEntries()

module.exports = {
  pages,
  css: {
    loaderOptions: {
      less: {
        /**
         * 定义less中的全局变量，使用‘@primary’
         */
        globalVars: {
          primary: '#fff'
        }
      }
    }
  }
}
