const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.set('view engine' , 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var loginName = "";

// index page
app.get("/",function(req,res){
    res.render("index",{name:"Welcome! "+loginName});
});

let data = [];

// login page
app.get("/login",function(req,res){
    loginName="";
    res.render("login");
});

app.post("/login",function(req,res){
    let Lemail = req.body.email;
    let Lpassword = req.body.password;
    let flag=true;
    for(let i=0 ; i<data.length ; i++){
        if(data[i].email===Lemail && data[i].password ===Lpassword){
            loginName=data[i].name;
            flag=false;
            res.redirect("/");
        }
    }
    console.log(Lemail+" . "+Lpassword)
    if(flag)  res.redirect("login");
});

// about page
app.get("/about",function(req,res){
    res.render("about");
});

// register page
app.get("/register",function(req,res){
    res.render("register");
});
class register{
    constructor(name,username,mobile,email,password){
        this.name = name;
        this.username = username;
        this.mobile = mobile;
        this.email = email;
        this.password = password;
    }
    
}
app.post("/register",function(req,res){
    let name = req.body.name;
    let username = req.body.username;
    let mobile = req.body.mobile;
    let email = req.body.email;
    let password = req.body.password;
    let temp =new register(name,username,mobile,email,password);
    data.push(temp);
    console.log(data.length + " . " + email + " . " + password);
    res.redirect("/login");
});


app.listen(3000,function(req,res){
    
    console.log("Using Port 3000");
});