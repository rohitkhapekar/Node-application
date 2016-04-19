var express = require('express');
var app = express();
var mongojs=require('mongojs');

var db = mongojs('detaillist1', ['detaillist1'])
var bodyParser= require('body-parser');

app.use(express.static(__dirname + "/files"));
app.use(bodyParser.json());


app.post('/detaillist1', function(req,res){
	console.log(req.body);
	db.detaillist1.insert(req.body,function(err,docs){
		console.log(docs);
		res.json(docs);
	});
});

app.listen(3005, function () {
  console.log('Example app listening on port 3005!');
});