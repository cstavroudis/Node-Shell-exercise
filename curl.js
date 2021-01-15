const request = require('request');

const curl = function(url, done) {
    request(url, function(error, response, body) {
        done(body);
    });
};

module.exports = curl;