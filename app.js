"use strict"

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//const ejs = require("ejs");
//const path = require("path");

const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

//app.set('views', path.join(__dirname, 'views'));

const session = require("express-session");
app.use(session({ secret: "secret", saveUninitialized: true, resave: true }));
var sess;

// Get Pages
router.get("/", function (req, res) {
    sess = req.session;
    res.render("index", { pagename: "Home", sess: sess });
});
router.get("/about", function (req, res) {
    sess = req.session;
    res.render("about", { pagename: "About", sess: sess });
});
router.get("/registration", function (req, res) {
    res.render("registration", { pagename: "Registration" });
});

router.get("/profile", function (req, res) {
    sess = req.session;
    if (typeof (sess) === "undefined" || sess.loggedin == true) {
        var errors = ["Not Authenticated User"];
        res.render("index", { pagename: "Home", errors: errors });
    } else {
        res.render("profile", { pagename: "Profile", sess: sess });
    }
})

// Logout
router.get("/logout", function (req, res) {
    sess = req.session;
    sess.destroy(function (req, res) {
        res.redirect("/");
    })
})

//Login Form
router.post("/login", function (req, res) {

    // console.log(req.body.email);
    // console.log(req.body.password);

    let errors = [];
    if (req.body.email === '') {
        errors.push("Email is required!")
    }
    if (req.body.password === '') {
        errors.push("Password is required!")
    }

    var validLogin = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!validLogin.test(req.body.email)) {
        errors.push("Email is Invalid")
    }
    if (!validLogin.test(req.body.password)) {
        errors.push("Password is Invalid")
    }

    // Login Condition for Username and Password
    sess = req.session;
    sess.loggedin = true;
    res.render('profile', { pagename: "Profile", errors: errors });

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
