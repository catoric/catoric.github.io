var apikey = 'd26f1df15f62dee44b7f5d7d6dfc2474';
var requestURL = '//api.openweathermap.org/data/2.5/weather';
var requestQuery = '?zip=94040,us&APPID=' + apikey; 
console.log(requestURL + requestQuery);

// Initialiize XMLHttpRequest weather object
 var weatherObject = new XMLHttpRequest();
 weatherObject.open('GET', requestURL + requestQuery, true);
 weatherObject.send();

 //Convert response text to JSON object
 console.log(weatherObject.responseText);
 