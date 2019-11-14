/*
^http://118.89.204.198/resolv\? url reject-img
^https:\/\/api\.zhihu\.com\/answers\/.*\/comments\/featured-comment url reject-img
^https:\/\/api.zhihu.com\/appview/api\/v4/answers/.*/recommendations url reject-img
^https:\/\/api\.zhihu\.com\/(moments\?|topstory\/recommend) url script-response-body zhihu.js
*/

let body = $response.body

body=JSON.parse(body)

body['data'].forEach((element, index)=> {

    if(element['type']=='feed_advert'||element['type']=='market_card'){      

       body['data'].splice(index,1)  

    }

})

body=JSON.stringify(body)

$done({body})

# 知乎去广告（By ）
