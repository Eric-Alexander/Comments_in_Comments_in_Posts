var mongoose = require('mongoose');

var Post = mongoose.model('Post');

module.exports=function(){
	return{
		create: function(req, res){
			Post.create(req.body, function(err, newPost){
				if(err){
					console.log("====PErmission Denied+++")
				}else{
					console.log('SUBMISSION APPROVED')
					// res.json(newPost);
					res.redirect('/posts');
				}
			})
		},
		index: function(req, res){
			Post.find({})
			.populate({
				path: 'comments',
				populate: {path: 'comments'}
			})
			.exec( function(err, allPost){
				if(err){
					console.log('ERROR POSTS PULL');
				}else{
					res.json(allPost);
				}
			});
		}
	}
}
