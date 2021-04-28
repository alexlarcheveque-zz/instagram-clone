var express = require('express');
var router = express.Router();
const mysql = require("mysql");

const AUTHENTICATE_USER = "SELECT * FROM user WHERE username = ? AND password = ?";

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

app.post("/login", (req, res) => {
    var username = request.body.username;
    var password = request.body.password;
    if (username && password) {
        connection.query(AUTHENTICATE_USER, [username, password], (err, results) => {
            if (results.length > 0) {
                request.sesion.loggedin = true;
                request.session.username = username;
                response.redirect('/feed');
            } else {
                response.send('Incorrect Username and/or Password');
            }
            response.end();
        });
    } else {
        response.send('Please enter Username and Password');
        response.end();
    }
});

module.exports = router;
