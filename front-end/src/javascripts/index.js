
import '@styles/index.scss'
import router from  '@router'

import indexController  from '@controllers/index-controller'
indexController.render()

router.init()


// 埋点
// let count = 0
// $('body').on('click', '.sidebar-toggle', function () {
//     count ++;
//     console.log(count)
// })