"use strict"

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const ejs = require("ejs");
const path = require("path");

const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.engine("ejs", require("ejs")._express);

app.set('views', path.join(__dirname, 'views'));


// Get Pages
router.get("/", function (req, res) {

    res.render("index", { pagename: "Home" });

})

router.get("/about", function (req, res) {

    res.render("about", { pagename: "About" });

})

router.get("/registration", function (req, res) {

    res.render("registration", { pagename: "Registration" });

})


//Login Form
router.post("/post", function (req, res) {

    // console.log(req.body.email);
    // console.log(req.body.password);

    var errors = [];
    if (req.body.email === '') {
        errors.push("Email is required!")
    }
    if (req.body.password === '') {
        errors.push("Password is required!")
    }

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!validRegex.test(req.body.email)) {
        errors.push("Email is Invalid")
    }
    if (!validRegex.test(req.body.password)) {
        errors.push("Password is Invalid")
    }
    res.render("index", { pagename: "Home", errors: errors });

})

//Registration Form
router.post('/registration', function (req, res) {
    let errors = [];
    if (req.body.firstName === '') {
        errors.push("Firstname is Required!")
    }
    if (req.body.lastName === '') {
        errors.push("Lastname is Required!")
    }
    if (req.body.state === '') {
        errors.push("State is Required!")
    }
    if (req.body.address === '') {
        errors.push("Address is Required!")
    }
    if (req.body.city === '') {
        errors.push("City is Required!")
    }
    if (req.body.age === '') {
        errors.push("Age is Required!")
    }
    if (req.body.zip === '') {
        errors.push("Zip is Required!")
    }
    if (req.body.bio === '') {
        errors.push("Bio is Required!")
    }
    if (!/^[a-z ,.'-]+$/i.test(req.body.firstName)) {
        errors.push("Firstname is Invalid!")
    }
    if (!/^[a-z ,.'-]+$/i.test(req.body.lastNamestName)) {
        errors.push("Lastname is Invalid!")
    }
    if (!/^(([Aa] [LlKkSsZzRr])|([Cc] [AaOoTt])|([Dd] [EeCc])|([Ff] [Ll])|([Gg] [AaUu])|([Hh] [Ii])|([Ii] [DdLlNnAa])|([Kk] [SsYy])|([Ll] [Aa])|([Mm] [AaDdEeIiNnOoSsTtPp])|([Nn] [EeVvHhJjMmYyCcDd])|([Oo] [HhKkRr])|([Pp] [AaRr])|([Rr] [Ii])|([Ss] [CcDd])|([Tt] [NnTtXx])|([Uu] [Tt])|([Vv] [AaIiTt])|([Ww] [AaIiYyVv]))/.test(req.body.state)) {
        errors.push("State is Invalid!")
    }
    if (!/^\d{5}(?:[-\s]\d{4})?$/.test(req.body.zip)) {
        errors.push("Zip is Invalid!")
    }
    if (errors.length === 0) {
        errors.push("Success")
    }
    res.render("registration", { pagename: "Registration", errors: errors });
})

app.use(express.static("public"));
app.use("/", router);
var server = app.listen("8080");
