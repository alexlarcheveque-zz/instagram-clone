var express = require('express');
var router = express.Router();
const mysql = require("mysql");
const jwt = require('jsonwebtoken');

const SECRET_TOKEN = 'helloworld'; // TODO: To make .env
const AUTHENTICATE_USER = 'SELECT * FROM user WHERE email = ? AND password = ?';
const SIGNUP_USER = 'INSERT INTO user(email, name, username, password) VALUES (?, ?, ?, ?)';

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password", // In a real codebase, this would be in .ENV file
    database: "instagram_clone"
});

connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected...')
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.error('Token in authenticate token', req.headers);
    if (token === null) {
        return res.sendStatus(401);
    }
    jwt.verify(token, SECRET_TOKEN, (err, user) => {
        console.error('jwt verify', err, user);
        if (err) {
            return res.sendStatus(403);
        } else {
            req.user = user;
            next();
        }
    });
}

router.get('/', function(req, res) {
    res.sed('Login/Signup into the Instagram application');
});

router.post("/login", (req, res) => {
    const {email, password} = req.body;
    if (email && password) {
        connection.query(AUTHENTICATE_USER, [email, password], (err, results) => {
            if (err) {
                res.send(error.message.toString());
            } else {
                if (results.length > 0) {
                    const user = {user: results[0]};
                    const token = jwt.sign(user, SECRET_TOKEN);
                    res.status(200).json(token);
                } else {
                    res.status(401).send('Incorrect Username and/or Password');
                }
                res.end();
            }
        });
    }
});

router.post("/signup", (req, res) => {
    const {email, name, username, password} = req.body;
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

router.get("/authenticate", authenticateToken, (req, res) => {
    res.status(200).json(req.user);
    res.end();
});

module.exports = router;
