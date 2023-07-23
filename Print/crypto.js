const moment = require('moment');

// signature
const cryptoJS = require("crypto-js");

//url and sorted query param
let requestUrl = () => {
        query = url;
    return encodeURIComponent(query);
}

let sortObject = (object) =>  {
    if (object instanceof Array) {
        var sortedObj = [],
            keys = Object.keys(object);
    }
    else {
        sortedObj = {},
            keys = Object.keys(object);
    }

    keys.sort(function(key1, key2) {
        if(key1 < key2) return -1;
        if(key1 > key2) return 1;
        return 0;
    });

    for(var index in keys){
        var key = keys[index];
        if(typeof object[key] == 'object' ){

            if ((object[key] instanceof Array)) {
                sortedObj[key] = sortObject(object[key]);
            }
            sortedObj[key] = sortObject(object[key]);
        } else {
            sortedObj[key] = object[key];
        }
    }
    return sortedObj;
}

url = 'https://extapi12.woohoo.in/rest/v3/customers/997202/load', // This is postman method to get request URL
    method = 'POST',
    key = '65088ccc8d51b9b73aef5b3bbafcd8e4', // This is postman method the get consumer sceret
    body = {
        "amount" : 100.0,
        "refno" : "1IdW1681385868315-Testing",
        "remarks" : " Test 30092002",
        "currency" : "356"
    };

let baseString = method + '&' + url;
if (body) {
    requestData = encodeURIComponent(JSON.stringify(sortObject(body)));
    baseString = method + '&' + url + '&' + requestData;
}

//setting it into environmental variable
console.log("signature", cryptoJS.HmacSHA512(baseString, key).toString());