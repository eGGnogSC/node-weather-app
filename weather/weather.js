const request = require('request');

var getWeather = (lat, long, callback) => {
  request({
    url: `https://api.darksky.net/forecast/3ab64b73d2be5f396c3bab632baf5c46/${lat},${long}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to connect to forecast.io API');
    }
  });
};

module.exports.getWeather = getWeather;
