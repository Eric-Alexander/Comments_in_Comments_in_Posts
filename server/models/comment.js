console.log("++++MODEL COMMENT++++");

var mongoose= require('mongoose');

var CommentSchema= new mongoose.Schema({

	content: {type: String},
	_post: {type: mongoose.Schema.ObjectId, ref: 'Post' },
	comments: [{type: mongoose.Schema.ObjectId, ref: 'Comment'}],
	_commentParent: {type: mongoose.Schema.ObjectId, ref: 'Comment' }
})

mongoose.model("Comment", CommentSchema);