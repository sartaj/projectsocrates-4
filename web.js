var gzippo = require('gzippo');
var express = require('express');
var logfmt = require("logfmt");
var app = express();

process.env.PWD = process.cwd()
var homeUrl = process.env.PWD + "client-web/0-2/dist";

app.use(logfmt.requestLogger());

app.use(gzippo.staticGzip(homeUrl));

var port = Number(process.env.PORT || 5000);

app.listen(port, function () {
    console.log("HOME URL: ", homeUrl);
    console.log("Listening on " + port);
});

//