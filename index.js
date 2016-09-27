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
var url = 'http://localhost/login';
// 定义阿里请求的 headers，如下的参数为固定参数，大小写不能变
var headers = {
        'Method' : 'post',
        'Path' : '/login',
        'Form' : {
            password:'111111',
            account:'18611439826',

        }
    };
// 定义 request 的请求参数
var options = {
    url : url,
    form:{account:'18611439826', password:'111111'}
};

/**
 * 执行api请求
 * @param  {[type]} error            [description]
 * @param  {[type]} requestParams){                 options.headers [description]
 * @return {[type]}                  [description]
 */
aliGetWaySign(headers, function(error, requestParams){
    options.headers = requestParams;
    request.post(options, function(e, r, b){
        console.log(b);
    });
});
