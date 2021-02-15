const request = require("request")

getWeather = (lon, lat, callback) => {
    const token = "d5bdc149429f747ab6570cb337139f60"
    const url = "http://api.weatherstack.com/current?access_key=" + encodeURIComponent(token) + "&query=" + encodeURIComponent(lat) + "," + encodeURIComponent(lon)
    request({url: url, json: true}, (err, resp) => {
        if (err) {
            callback("System Error", undefined)
        } else if (resp.body.error && resp.body.error.code === 615) {
            callback("Unable find the location", undefined)
        } else {
            callback(undefined, {
                wind_speed: resp.body.current.wind_speed,
                temperature: resp.body.current.temperature
            })
        }
    })
}

module.exports = getWeather