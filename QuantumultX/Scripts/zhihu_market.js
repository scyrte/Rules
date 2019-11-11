let body = $response.body 
body=JSON.parse(body)
body['sub_webs'].splice(0,1)
body['sub_webs'].splice(1,1)
body=JSON.stringify(body)
$done({body})

// 知乎去广告 (By onewayticket255)
// https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20market.js
