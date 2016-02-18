var mongoose = require('mongoose');

var Comment = mongoose.model('Comment');

var Post = mongoose.model('Post');

module.exports=function(){
	return{
		create: function(req, res){
			console.log(req.body);
			Comment.create(req.body, function(err, newComment){
				if(err){
					console.log("====PErmission Denied+++")
				}else{
					if(req.body._post){
					console.log('SUBMISSION APPROVED'+newComment);
					Post.findById(req.body._post, function(err, assocParentPost){
						if(err){
							console.log('CANT FIND POST');
						}else{
							console.log('here');
							assocParentPost.comments.push(newComment)
							assocParentPost.save(function(err, updatedPost){
								if(err){
									console.log(" didnt save comment association to parent post");
								}else{
									return res.json("whateverIwant");
								}
							})
						}
					})
					}else if(req.body._commentParent){
					console.log('SUBMISSION APPROVED'+newComment);
					Comment.findById(req.body._commentParent, function(err, assocParentComment){
						if(err){
							console.log('CANT FIND POST');
						}else{
							console.log('here');
							assocParentComment.comments.push(newComment)
							assocParentComment.save(function(err, updatedComment){
								console.log(updatedComment);

								if(err){
									console.log(" didnt save comment association to parent comment");
								}else{
									return res.json("whateverIwantAGAIN");
								}
							})
						}
					})
					}
					//I've created a comment, going to store comment in res.locals, then call on post controller --> update method, which will check to see if res.locals exists, and if so, update the post with the new comment, then return to angular factory with response.
				}
			})
		}
	}
}