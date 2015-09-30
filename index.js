'use strict';
import Hapi from 'hapi';
import config from './config';

let server = new Hapi.Server();

server.connection(config.server);

server.start(function (err) {
    if (err) {
        console.log(err);
    }

    console.log('Server starting @' + server.info.uri);
});

module.exports = server;