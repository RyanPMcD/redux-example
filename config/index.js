'use strict';
import Hapi from 'hapi';
import config from './config';

let server = new Hapi.Server();

server.connection(config.server);
console.log('info', 'Server started.');
server.start(function (err) {
    // After method already executed
    console.log('Server starting @' + server.info.uri);
    console.log('Server started.');
    if (err) {
        console.log(err);
    }
});

module.exports = server;