process.env.PWD = process.cwd()


var gzippo = require('gzippo');
var express = require('express');
var logfmt = require("logfmt");
var app = express();

// app.use(logfmt.requestLogger());

var homeUrl = process.env.PWD + "/client-web/0-2/dist/"; 

console.log('Directory: ', homeUrl);

app.use(gzippo.staticGzip(homeUrl));

var port = Number(process.env.PORT || 5000);

app.listen(port, function() {
  console.log("Listening on " + port);
}); 