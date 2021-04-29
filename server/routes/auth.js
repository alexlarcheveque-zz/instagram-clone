var express = require('express');
var router = express.Router();
const mysql = require("mysql");
const jwt = require('jsonwebtoken');

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

router.get('/', function(req, res) {
    res.send('Login/Signup into the Instagram application');
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
                    res.send('Successful login');
                    //     const token = jwt.sign(user, SECRET_TOKEN, {
                    //         expiresIn: '24h'
                    //     });
                    //     res.json(token);
                } else {
                    res.send('Incorrect Username and/or Password');
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

/** For JWT Protected Route

 const SECRET_TOKEN = 'helloworld'; // This would be stored in .ENV file, which is embedded during the build time.


const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, SECRET_TOKEN, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

router.get("/authenticate", authenticateJWT, (req, res) => {
    res.send('User is authorized!');
    res.end();
});
 **/

module.exports = router;
