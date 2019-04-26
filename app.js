const RouterOSClient = require('routeros-client').RouterOSClient;
var mysql = require('mysql');

require('dotenv').config(); // needs implemented

const api = new RouterOSClient({
    host: "10.0.0.1",
    user: "admin",
    password: "s..."
});

api.connect().then((client) => {
    // After connecting, the promise will return a client class so you can start using it

    // You can either use spaces like the winbox terminal or
    // use the way the api does like "/system/identity", either way is fine
    client.menu("/system identity").getOnly().then((result) => {
        console.log(result); // Mikrotik - result.name
        api.close();
    }).catch((err) => {
        console.log(err + ': failed get menu'); // Some error trying to get the identity
    });
    // console.log(client);

}).catch((err) => {
    // Connection error
    console.log(err + ': failed connect');
});