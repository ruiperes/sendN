#!/usr/bin/env node

var request = require('request');


function getDefaultMessage() {
    var data = {
        message: {
            alert: "test",
            type: "url",
            data: {
                url: "http://www.google.com/"
            }
        }
    };

    return data;
}

module.exports = {
    sendMessage: function(key, devices, message) {
        var data = {};

        if (typeof message === "undefined") {
            data.data = getDefaultMessage();
        } else {
            data.data = JSON.parse(message);
        }

        if (devices.length > 1) {
            data.registration_ids = devices;
        } else {
            data.to = devices[0];
        }

        request
            .post({
                url: 'https://android.googleapis.com/gcm/send',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'key=' + key
                },
                body: JSON.stringify(data),
            }, function(error, response, body) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(response.statusCode, body);
                }
            });
    }
}