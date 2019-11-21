let body = $response.body 
body=JSON.parse(body)
delete body['mcn_user_info']
body=JSON.stringify(body)
$done({body})

// 知乎去广告 (By onewayticket255)
// https://github.com/onewayticket255/Surge-Script/blob/master/surge%20zhihu%20people.js
