var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo_2");

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});

var User = mongoose.model("User", userSchema);

// Post.create({
//     title: "How to cook the bset burger pt. 3",
//     content: "asdfdsfgafh"
// }, function(err, post){
//     User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
//         if(err){
//             console.log(err);
//         }else{
//             foundUser.posts.push(post._id);
//             foundUser.save(function(err, data){
//                 if(err){
//                     console.log(err);
//                 }else{
//                     console.log(data);
//                 }
//             })
//         }
//     });
// });

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });

User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    }else{
        console.log(user);
    }
});