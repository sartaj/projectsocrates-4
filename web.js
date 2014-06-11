var gzippo = require('gzippo');
var express = require('express');
var logfmt = require("logfmt");
var app = express();
var port = Number(process.env.PORT || 5000);

process.env.PWD = process.cwd()
var homeUrl = process.env.PWD + "/client-web/0-2/dist"; 

// app.use(logfmt.requestLogger());

// app.use(gzippo.staticGzip(homeUrl));

app.get('/', function(request, response) {
    response.sendfile(__dirname + '/index.html');
}).configure(function() {
    app.use('/', express.static(homeUrl));
}).listen(port);