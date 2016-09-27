#api-gateway-demo-sign-node 阿里 api 网关签名 SDK

##### step 1 配置 ali_gateway_sign.js

    在文件ali_gateway_sign.js中配置自己项目的 KEY 和 SECRET

##### step 2 配置参数

    1>.index.js 文件里面配置 aliGetWaySign 的请求参数

        var headers = {
                'Method' : 'post',
                'Path' : '/login',
                'Form' : {
                    password:'111111',
                    account:'18611439826',

                }
            };

        Method, Path 这两个参数名称最好不要更改，如果需要传参数给 api， 你需要传递 Form，格式如上，需要签名。

    2>.配置 request 的参数

        Method, Path 这两个参数名称最好不要更改，如果需要传参数给 api， 你需要传递 Form，格式如上，需要签名。

    2>.配置 request 的参数

        var options = {
            url : url,
            form:{account:'18611439826', password:'111111'}
        };


    3>. request 执行请求

        request.post(options, function(e, r, b){});
        request.get(options, function(e, r, b){});

    此处需要注意请求的方式要跟Method 的请求方式一致.

    ps：如果请求的结果返回 无效的 url， 请检查你的 url， url = host + path ；headers 中也是需要传递 path 参数的。
