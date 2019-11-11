let body = $response.body
body=JSON.parse(body)
delete body['ad_info']
body=JSON.stringify(body)
$done({body})

// 知乎去广告 (By onewayticket255)
// https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/zhihu_answer.js
