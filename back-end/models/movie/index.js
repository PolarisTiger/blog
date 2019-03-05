const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/movies', { useNewUrlParser: true });

// 电影item Schema （规定文档的格式）
var movieItemSchema = new mongoose.Schema({
    img: String,
    title:   String,
    star: String,
    showTime: Number,
    publishTime: Number,
    description: String,
    fullDescription: String
});
// 单数会自动加s （集合）
var Items = mongoose.model('item', movieItemSchema);



// 获取电影信息
const getMovieItems =  () => {
    return Items.find({}).exec() 
}


// 获取某个id对应的电影信息
const getMovieItemById =  (id) => {
    return Items.find({_id: id}).exec() 
}

// 发布新电影
const postMovieItem =  (params) => {
    let html = params.description
    let formatHtml = html.replace(/<[^>]*>/g, '') // 没有标签的
    params.description = formatHtml.slice(0, 30) + '...'
    params.fullDescription = html // 完整描述
    return Items.insertMany(params)
}

module.exports = { 
    getMovieItems,
    postMovieItem,
    getMovieItemById
}

// id , title, img, publishTime, showTime, description