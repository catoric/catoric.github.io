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
    console.log(weatherObject.responseText);
    console.log(weatherInfo);
    

 }
 
 