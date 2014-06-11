var express = require('express');
var app = express().createServer();

app.use("/", express.static(__dirname + "/client-web/0-2/dist"));

var port = Number(process.env.PORT || 5000);

app.listen(port, function() {
  console.log("Listening on " + port);
}); 