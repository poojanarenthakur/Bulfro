const express = require('express');
const router = express.Router();
const { connection } = require('../db');
const jwt = require('jsonwebtoken');
const pass = 'jejwhfjekk fejfhefejbe efehjefjhfbejff ffbefjefjhebfjhfbhfjjhgh';
const { validationResult } = require('express-validator');
const { user_login_validation, admin_login_validation } = require('../login/login_validation');


router.use((req, res, next) => {
    console.log('Times', Date.now());
    console.log('login');
    next();
})

router.post('/admin_login', admin_login_validation(),
    (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            const resp = {
                success: false,
                message: 'Error',
                data: errors.array()
            };
            res.status(400).send(resp)
        } else {
            const username = req.body.username;
            const password = req.body.password;
            console.log(username, password);
            const sql = `SELECT * FROM admin WHERE username = ? AND password = ?`;
            connection.query(sql, [username, password], (err, results) => {
                console.log(err, results);
                if (err) {
                    const resp = {
                        success: false,
                        message: 'Error: ' + err,
                        data: null
                    };
                    res.status(404).send(resp);
                } else if (results.length > 0) {
                    token = jwt.sign({
                        id: results[0].id,
                        username: results[0].username,
                        address: results[0].address,
                        mobile: results[0].mobile,
                        role: 'admin',
                    },
                        pass, { expiresIn: '1d' });

                    const resp = {
                        success: true,
                        message: 'login Success',
                        data: token
                    };
                    res.status(200).send(resp);
                } else {
                    const resp = {
                        success: false,
                        message: 'admin not found',
                        data: null
                    };
                    res.status(404).send(resp);
                }
            });

        }

    });

router.post('/user_login', user_login_validation(),
    (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            const resp = {
                success: false,
                message: 'Error',
                data: errors.array()
            };
            res.status(400).send(resp)
        } else {
            const username = req.body.username;
            const password = req.body.password;
            console.log(username, password);
            const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
            connection.query(sql, [username, password], (err, results) => {
                console.log(err, results);
                if (err) {
                    const resp = {
                        success: false,
                        message: 'Error: ' + err,
                        data: null
                    };
                    res.status(404).send(resp);
                } else if (results.length > 0) {
                    token = jwt.sign({
                        id: results[0].id,
                        username: results[0].username,
                        address: results[0].address,
                        mobile: results[0].mobile,
                        role: 'user',
                    },
                        pass, { expiresIn: '1d' });

                    const resp = {
                        success: true,
                        message: 'login Success',
                        data: token
                    };
                    res.status(200).send(resp);
                } else {
                    const resp = {
                        success: false,
                        message: 'user not found',
                        data: null
                    };
                    res.status(404).send(resp);
                }
            });

        }

    });

module.exports = router;