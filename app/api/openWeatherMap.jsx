var axios = require('axios');

//When using 'const', best practice is to uppercase everything and put underscore inbetween words
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=7b4481028be415387aa26c946ef6ddc7&units=imperial';


//api
//7b4481028be415387aa26c946ef6ddc7
module.exports = {
  getTemp: function(location) {
    //template string
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      //debugger;
      if (res.data.cod && res.data.message){
        throw new Error('Unable to fetch weather for that location.');
      } else {
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error('Unable to fetch weather for that location.');
    });
  }
}
