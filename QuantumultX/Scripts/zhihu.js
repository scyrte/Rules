let body = $response.body
body=JSON.parse(body)
body['data'].forEach((element, index)=> {
    if(element['type']=='feed_advert'||element['type']=='market_card'){      
       body['data'].splice(index,1)  
    }
})
body=JSON.stringify(body)
$done({body})
