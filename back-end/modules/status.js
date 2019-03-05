
const status = {
    'success': {
        code: '200',
        msg: 'request is success'
    },
    'miss param': {
        code: '205',
        msg: 'missing params'
    },
    'error': {
        code: '500',
        msg: 'request is error from server'
    },
    'illegal': {
        code: '501',
        msg: '请上传正确的图片格式'
    }
}
module.exports = status 
