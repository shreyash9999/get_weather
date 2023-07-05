const express = require("express");
const https = require("https")//basically used to request data//dont need to install the nodule with npm as its inbuit/preavaiable
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    const city = req.body.cityName;
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=7f47e552d6f822c850cb929bbc17edc0"
    
    https.get(url,function(resp){
        console.log(resp.statusCode);

        //will get data in diff formate using "on"
        resp.on("data",function(data){
            const weatherData = JSON.parse(data);//get data in js object
            const temp = weatherData.main.temp
            const weatherDisp = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const iconUrl=  "https://openweathermap.org/img/wn/"+icon+"@2x.png"
            res.write("<h1>Temp in "+city+" is : "+ temp+ "</h1><h3>discription : " + weatherDisp+"</h3>");
            res.write("<img src="+ iconUrl+ ">");
            res.send();


        })
    });

});










app.listen(3000,function(){
    console.log("server up on 3000");
});

// xser