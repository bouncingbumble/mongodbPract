var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo");

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
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "snoopy@brown.com",
//     name: "Snoopy brown"
// });

// newUser.posts.push({
//     title: "How to fly a house",
//     content: "flying with my bird friend"
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log("Error: " + err);
//     }else{
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Reflection on apples",
//     content: "They are delicious"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     }else {
//         console.log(post);
//     }
// })

User.findOne({name: "Snoopy brown"}, function(err, user){
    if(err){
        console.log(err);
    }else{
        user.posts.push({
            title: "im a dog",
            content: "dogs are cool"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            }else{
                console.log(user);
            }
        });
    }
});