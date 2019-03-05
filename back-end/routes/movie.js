const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movie')
const { response } = require('../middlewares')


// 获取电影信息
router.get('/items', movieController.getMovieItems, response)
// 发布电影信息
router.post('/item', movieController.postMovieItem, response)
router.get('/item/:id', movieController.getMovieItem, response)

module.exports = router