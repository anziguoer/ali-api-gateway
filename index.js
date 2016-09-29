/*
* @Author: yulongyang
* @Email: anziguoer@sina.com
* @Date:   2016-09-27 16:34:43
* @Last Modified by:   yulongyang
* @Last Modified time: 2016-09-27 16:40:26
* @Descrition : 阿里云 api 网关测试
*/
var request = require('request');
var aliGetWaySign = require('./ali_gateway_sign');

var requestParams = aliGetWaySign({
    Method : 'post|get',
    Url : 'http://localhost/path',
    // 参数， 如果有则配置， 没有则不配置
    Form : {
        mabile : '12341234',
        password : 'asdfasdfadf'
    }
});



// 使用 node request模块发送请求
request(requestParams, function(error, response, body){
    // 如果没有问题， 则 body 为服务器返回的数据
    console.log(body);
});
