console.log("++++MODEL POST++++");

var mongoose= require('mongoose');

var PostSchema= new mongoose.Schema({

	title: {type: String},
	content: {type: String},
	comments: [{type: mongoose.Schema.ObjectId, ref: 'Comment' }]
})

mongoose.model("Post", PostSchema);