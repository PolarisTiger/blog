### 猫眼资讯管理系统 API接口文档

api-server： http://localhost: 3000

基础路径： /api/version

当前版本： v1

#### 影讯接口

1. 电影信息获取

接口地址：/movie/items
返回格式：json
请求方式：get
请求示例：http://localhost:3000/api/v1/movie/items
请求参数说明：
    * page ....
响应参数说明：
    * id 电影id
    * title 电影名字。。。