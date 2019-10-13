var apikey = 'd26f1df15f62dee44b7f5d7d6dfc2474';
var requestURL = '//api.openweathermap.org/data/2.5/weather';
var requestQuery = '?zip=94040,us&APPID=' + apikey; 
var weatherObject = new XMLHttpRequest();

// Initialiize XMLHttpRequest weather object

 weatherObject.open('GET', requestURL + requestQuery, true);
 weatherObject.send();

 //Convert response text to JSON object
 weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    var 
    console.log(weatherObject.responseText);
    console.log(weatherInfo);
    
    //Change city to correct name
    document.getElementById('place').innerHTML = weatherInfo.name;   

 }
 
 