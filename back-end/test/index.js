const path = require('path')


let originalname = '123.jpg'
let extname = path.extname(originalname)
let basename = path.basename(originalname, extname)
let filename = basename + '-' + Date.now() + extname

console.log(filename)