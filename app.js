var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
});

app.get("/whats-new", function(req, res){
    res.render("whatsnew");
});

app.get("/insurance", function(req, res){
    res.render("insurance");
});

app.get("/aba", function(req, res){
    res.render("aba");
});

app.get("/careers", function(req, res){
    res.render("careers");
});

app.get("/contact", function(req, res){
    res.render("contact");
});

app.listen(3000, function(){
    console.log("Server has started");
});