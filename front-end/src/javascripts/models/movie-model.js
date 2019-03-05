
import request from '@utils/request'

// 获取电影信息
const getMovieItems = () => {
    return request({
        url: '/api/v1/movie/items'
    })
}

// 发布电影信息
const postMovieItem = (data) => {
    return request({
        url: '/api/v1/movie/item',
        type: 'post',
        data,
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    })
}

// 获取某个电影信息
const getMovieItem = (id) => {
    return request({
        url: '/api/v1/movie/item/' + id
    })
}


export  {
    getMovieItems,
    postMovieItem,
    getMovieItem
}