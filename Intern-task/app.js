const express = require("express");
const bodyParser = require("body-parser")
const ejs = require("ejs");
const mongoose = require("mongoose")
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended:true
}));

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true});

const userSchema = {
    email: String, 
    password: String
};
const User = new mongoose.model("User", userSchema);

const data = Math.floor(100000 + Math.random() * 900000);

app.get("/", function(req,res){
    res.render("home")
});
app.get("/login", function(req,res){
    res.render("login")
});
app.get("/register", function(req,res){
    res.render("register")
});

app.post("/register", function(req, res){
    const newUser =  new User({
        email: req.body.username,
        password: req.body.password
    });

    newUser.save(function(err){
        if(err){
            console.log(err);
        }
        else{
            res.render("secrets");
        }
    });
});

app.post("/login", function(req,res){
    const username =  req.body.username;
    const password = req.body.password;

    User.findOne({email: username}, function(err,foundUser){
        if(err){
            console.log(err);
        } else{
            if(foundUser){
                if(foundUser.password===password) {
                    res.render("otp");
                    console.log(data);
                }
                else{
                    res.render("failure")
                }
            }
        }
    })
})

app.post("/otp", function(req,res){
    const number = (req.body.userotp);
    if(number==data){
      res.render("sucessful")
    }
    else{
       res.render("failure")
    }
})

app.listen(3000, function(){
    console.log("server has started");
});