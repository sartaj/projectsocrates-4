process.env.PWD = process.cwd()

var gzippo = require('gzippo');
var express = require('express');
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.use('/s', gzippo.staticGzip(process.env.PWD + "/client-web/0-2/dist"));

var port = Number(process.env.PORT || 5000);

app.listen(port, function() {
  console.log("Listening on " + port);
}); 