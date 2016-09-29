#api-gateway-demo-sign-node 阿里 api 网关签名 SDK

##### step 1 配置 ali_gateway_sign.js

    在文件ali_gateway_sign.js中配置自己项目的 KEY 和 SECRET

##### step 2 配置参数

    1>.index.js 文件里面配置 aliGetWaySign 的请求参数

        var options = {
            Method : 'post|get',
            Url : 'http://localhost/path',
            // 参数， 如果有则配置， 没有则不配置
            Form : {
                mabile : '12341234',
                password : 'asdfasdfadf'
            }
        };

        Method, Path 这两个参数名称最好不要更改，如果需要传参数给 api， 你需要传递 Form，格式如上，需要签名。

    2>.获取签名， 以及发送请求的参数

        var requestParams = aliGetWaySign(options);

        此处返回的数据是这样子的（正好可以直接发送给 request 的请求参数）：

        {
            method: 'get',
            url: 'http://localhost/path',
            form: {
                mabile : '12341234',
                password : 'asdfasdfadf'
             },
            headers:
                {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                    Accept: 'application/json; charset=UTF-8',
                    'Content-MD5': '',
                    Date: 2016-09-29T09:33:05.549Z,
                    Method: 'get',
                    'X-Ca-Key': '23423044',
                    'X-Ca-Nonce': 'fk50xqq4wa3imtk',
                    'X-Ca-Timestamp': 1475141585549,
                    'V-App-Client-Information': 'app_name:hxwx|plat:win32|ver:3.3|device:wap|os:node|channel_name:wap|udid:1475141585549|client_ip:192.168.0.1|user-agent:test',
                    'X-Ca-Signature-Headers': 'X-Ca-Key,X-Ca-Nonce,X-Ca-Stage,X-Ca-Timestamp',
                    'X-Ca-Stage': 'TEST',
                    Url: 'http://localhost/path?mabile=12341234&passwordasdfasdfadf',
                    Path: '/path?mabile=12341234&passwordasdfasdfadf',
                    'X-Ca-Signature': 'nLHD3apb17LHUjuyA1pjL96W2GIYXoo7I68ql93QfOw='
                  }
         }

    3>. request 执行请求

    // 使用 node request模块发送请求
    request(requestParams, function(error, response, body){
        // 如果没有问题， 则 body 为服务器返回的数据
        console.log(body);
    });

    ps：如果请求的结果返回 无效的 url， 请检查你的 url， url = host + path ；headers 中也是需要传递 path 参数的。
