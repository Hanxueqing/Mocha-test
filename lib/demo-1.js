var https = require("https");
// var http = require("http");

class Demo {
    subtotal(unitPrice, quantity) {
        return unitPrice * quantity;
    }
    waitTwoSecond(data,callback){
        setTimeout(function(){
            callback(data);
        },2000);
    }
    fetchData(api,callback){
        var requestUrl = `https://douban.uieee.com/v2/movie/${api}`;
        https.get(requestUrl,function(res){
            var responseData = ""
            res.setEncoding("utf8")

            res.on("data",function(chunk){
                responseData += chunk
            })

            res.on("end",function(){
                callback(JSON.parse(responseData))
            })
        })
    }
    engine(fuel){
        if(fuel !== "gas"){
            throw new Error("not accept")
        }
    }
}
module.exports = Demo;