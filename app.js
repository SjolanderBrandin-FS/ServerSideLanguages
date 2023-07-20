"use strict"

var fs = require("fs");
var http = require("http");
var path = require("path");
var url = require("url");

var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


let ejs = require("ejs");
const router = express.Router();
var app = express();
app.set("view engine", "ejs");
app.engine("ejs", require("ejs")._express);

router.get("/", function (res) {

    res.render("index", { pagename: "Home" });

})

router.get("/about", function (req, res) {

    res.render("about", { pagename: "About" });

})

router.post("/login", function (req, res) {

    console.log(req.body.email);
    console.log(req.body.password);
    var errors = [];
    if (req.body.email == "") {
        errors.push("Email is required!")
    }
    if (req.body.password == "") {
        errors.push("Password is required!")
    }


    // Example video is to blurry to make out what is suppose to be written here!!!!
    /// Please advise on how write this like in the example video.

    // if(/.test[req.body.email] ==""){
    //     errors.push("Email is required!")
    // }
    res.redirect("/");

})

app.use(express.static("public"));
app.use("/", router);
var server = app.listen("8080");
