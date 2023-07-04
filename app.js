const express = require("express");
const https = require("https")//dont need to install the nodule with npm as its inbuit/preavaiable
const app = express();

app.get("/", function(req,res){

    https.get("https://api.openweathermap.org/data/2.5/weather?lat=18.516726&lon=73.856255&appid=7f47e552d6f822c850cb929bbc17edc0");

    res.send("oo its up!");
});






app.listen(3000,function(){
    console.log("server up on 3000");
});

// xser