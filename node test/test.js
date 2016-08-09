var express = require('express');
var test = express();

test.get('/', function (req, res) {
    res.send('Hello World!');
});

var server =test.listen(3002, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
