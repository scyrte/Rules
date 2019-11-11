let body = $response.body
body=JSON.parse(body)
body['data'].forEach((element, index)=> {
    if(element['card_type']=='slot_event_card'||element.hasOwnProperty('ad')){      
       body['data'].splice(index,1)  
    }
})
body=JSON.stringify(body)
$done({body})

// 知乎去广告 (By onewayticket255)
// https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20recommend.js
