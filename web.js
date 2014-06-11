process.env.PWD = process.cwd()

// var gzippo = require('gzippo');
// var express = require('express');
// var logfmt = require("logfmt");

// var app = express();

// app.use(logfmt.requestLogger());

var homeUrl = process.env.PWD + "/client-web/0-2/dist/"; 

var express = require('express'); 
var app = express();
app.use(express.static(homeUrl));

app.listen(process.env.PORT || 3000);