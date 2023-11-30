
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");


app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname+ "/index.html");
});
app.post("/",(req,res)=> {
const appId = "32ea554c6c7675e313be952cea7664b7"
const query = req.body.CityName
const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+ appId

https.get(url, (response) => {
    console.log("status cpde: ", response.statusCode);
    console.log("header: ", response.headers);


    response.on("data" ,(data) => {
        const weatherData = JSON.parse(data);
        const descrption = weatherData.weather[0].description;

        const icon = weatherData.weather[0].icon
        const imgUrl = "http://openweathermap.org/img/wn/10d@2x.png";
        res.write("the weather description for "+query+" is "+ weatherData.weather[0].description);
       
        res.send();


    })
})
})








app.listen(3000, function(){
    console.log("server started!");
});