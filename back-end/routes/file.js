var express = require('express');
var router = express.Router();
const { fileUploadImage } = require('../controllers/file')
const { response, uploadImage } = require('../middlewares')
/* GET home page. */
// uploadImage 接收图片，存储图片
// fileUploadImage 复制处理图片的路径等其他的信息
router.post('/upload/img', uploadImage, fileUploadImage, response);
router.post('/description/img', uploadImage, (req, res, next) => {
    res.json({
        'success': true,
        'msg': 'ok',
        'file_path': 'http://10.60.18.164:3000' + req.body.img
    })
});

module.exports = router;

