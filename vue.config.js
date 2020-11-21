// const path = require('path')
//
// function resolve(dir){
//   return path.join(__dirname,dir)
// }

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                //默认： '@':'src',
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                // 'router':'@/router',
                // 'store':'@/store',
                'views':'@/views',
            }
        }
    }
}
