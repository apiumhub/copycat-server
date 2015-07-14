var express = require('express');
 var bodyParser = require('body-parser');
var app = express();

 var code = 200;
 var headers = [];

 app.use(bodyParser.urlencoded({extended: true}));
 app.use(bodyParser.json());

 app.post('/configure', function (req, res) {
     headers = req.body.headers;
     code = req.body.code;
     res.send('Copycat server configured!');
 });

 app.use(function(req, res, next){
     for (var key in headers) {
         if(headers.hasOwnProperty(key)){
             res.setHeader(key, headers[key]);
         }
     }
     res.status(code);
     res.send('Copycat response!');
 });

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});