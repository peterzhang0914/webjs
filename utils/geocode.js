const request = require("request")

getGeoCode = (address, callback) => {
    const token = 'pk.eyJ1IjoicGV0ZXJ6aGFuZzA5MTQiLCJhIjoiY2tqc2JzeGY5MDU5aDJ3cG5oeGhnYjJ3NCJ9.8IDWYv8h3waZOzblEOLEvw'
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=" + encodeURIComponent(token)
    request({url: url, json: true}, (err, resp) => {
        if (err) {
            callback("System Error", undefined)
        } else if (resp.body.features.length === 0) {
            callback("Not address can be found.")
        } else {
            const lon = resp.body.features[0].center[0]
            const lat = resp.body.features[0].center[1]
            const loc = resp.body.features[0].place_name
            callback(undefined, {
                lon: lon,
                lat: lat,
                loc: loc
            })
        }
    })
}
module.exports = getGeoCode