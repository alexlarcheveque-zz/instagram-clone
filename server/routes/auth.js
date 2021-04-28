var express = require('express');
var router = express.Router();
const mysql = require("mysql");

const AUTH_TABLE_NAME = "user";
const AUTHENTICATE_USER = `SELECT * FROM ${AUTH_TABLE_NAME} WHERE username = ? AND password = ?`;
const SIGNUP_USER = `INSERT INTO ${AUTH_TABLE_NAME}(email, name, username, password) VALUES (?, ?, ?, ?)`


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password", // In a real codebase, this would be in .ENV file, which is embedded during the build time.
    database: "instagram_clone"
});

connection.connect(err => {
    if (err) return err;
});

router.get('/', function(req, res, next) {
    res.send('Login/Signup into the Instagram application');
});

router.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username && password) {
        connection.query(AUTHENTICATE_USER, [username, password], (err, results) => {
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.username = username;
                res.redirect('/feed');
            } else {
                res.send('Incorrect Username and/or Password');
            }
            res.end();
        });
    } else {
        res.send('Please enter Username and Password');
        res.end();
    }
});

router.post("/signup", (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    if (email && name && username && password) {
        connection.query(SIGNUP_USER, [email, name, username, password], (err, results) => {
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.username = username;
                res.redirect('/feed');
            } else {
                res.send('You cannot use this username, there is a duplicate username in the database');
            }
            res.end();
        });
    } else {
        res.send('Please enter Username and Password');
        res.end();
    }
});

router.get("/feed", (req, res) => {
    if (req.session.loggedin) {
        res.send() // TODO: Send username here
    } else {
        res.send('Please login!');
    }
    res.end();
})

module.exports = router;
