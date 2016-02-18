var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(__dirname));

require('./server/config/mongoose.js');

var postC = require('./server/controllers/postController.js')();

var comment = require('./server/controllers/commentController.js')();

app.get('/posts', postC.index);

app.post('/posts', postC.create);

app.post('/comments', comment.create);

console.log(postC);

var server = app.listen(8000, function(){
	console.log("APPLICATION IS DEFINITLEY LISTENING...");
});