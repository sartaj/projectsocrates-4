process.env.PWD = process.cwd()

var gzippo = require('gzippo');
var express = require('express');
var logfmt = require("logfmt");
var app = express();

var homeUrl = process.env.PWD + "/client-web/0-2/dist/"; 
var port = Number(process.env.PORT || 5000);

// app.use(logfmt.requestLogger());

app.get('/', function(request, response) {
    response.sendfile(homeUrl+ 'index.html');
}).configure(function() {
	app.use(gzippo.staticGzip(homeUrl));
}).listen(port, function(){
    console.log("Listening on " + port);
});