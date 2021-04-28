var express = require('express');
var router = express.Router();
const mysql = require("mysql");

const AUTHENTICATE_USER = 'SELECT * FROM user WHERE email = ? AND password = ?';
const SIGNUP_USER = 'INSERT INTO user(email, name, username, password) VALUES (?, ?, ?, ?)';

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password", // In a real codebase, this would be in .ENV file, which is embedded during the build time.
    database: "instagram_clone"
});

connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected...')
})

router.get('/', function(req, res) {
    res.send('Login/Signup into the Instagram application');
});

router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (email && password) {
        connection.query(AUTHENTICATE_USER, [email, password], (err, results) => {
            if (err) {
                res.send(error.message.toString());
            } else {
                if (results.length > 0) {
                    result = results[0];
                    req.session.name = result.name;
                    req.session.email = result.email;
                    req.session.username= result.username;
                    res.send('Successful login');
                } else {
                    res.send('Incorrect Username and/or Password');
                }
            }
            res.end();
        });
    } else {
        res.send('Please enter Username and Password', req.body);
        res.end();
    }
});

router.post("/signup", (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    console.log(email, name, username, password);
    if (email && name && username && password) {
        connection.query(SIGNUP_USER, [email, name, username, password], (err, results) => {
            if (err) {
                res.send(err.message.toString());
            } else {
                res.send('Successful signup');
            }
            res.end();
        });
    } else {
        res.send('Please fill out name, email, username, and password');
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
