const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.set('view engine' , 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

// index page
app.get("/",function(req,res){
    res.render("index");
});

// login page
app.get("/login",function(req,res){
    res.render("login");
});

// about page
app.get("/about",function(req,res){
    res.render("about");
});

// register page
app.get("/register",function(req,res){
    res.render("register");
});


app.listen(3000,function(req,res){
    console.log("Using Port 3000");
});