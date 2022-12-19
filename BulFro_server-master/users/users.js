const express = require('express');
const router = express.Router();
const { connection } = require('../db');
const { verifyToken, checkadmin } = require('../middleware/jwt')
const { validationResult } = require('express-validator');
const { user_validation } = require('../validation/validation')
const bodyparser = require('body-parser');
const jsonParser = bodyparser.json();

router.use((req, resp, next) => {
    console.log('Times: ', Date.now());
    console.log('users');
    next();
}, [verifyToken])

//add users API
router.post('/add_user', [checkadmin], user_validation(), (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const resp = {
            success: false,
            message: 'Error',
            data: errors.array()
        };
        res.status(400).send(resp)
    } else {
        const {
            first_name,
            last_name,
            email,
            username,
            password,
            mobile,
            address,
            is_active,
            org_id,
            location_id
        } = req.body;
        const sqlQuery = `INSERT INTO users(first_name, last_name, email, username, password, mobile, address, is_active, org_id, location_id) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        connection.query(sqlQuery, [first_name, last_name, email, username, password, mobile, address, is_active, org_id, location_id], (error, result) => {
            if (error) {
                const resp = {
                    success: false,
                    message: ' error ' + error,
                    data: null
                }
                res.status(400).send(resp);
            } else {
                const resp = {
                    success: true,
                    message: 'user addes sucessfully',
                    data: result
                }
                res.status(200).send(resp);

            }
        });
    }
});

//update user by id API
router.put('/update_user/:id', [checkadmin], (req, res) => {
    const { id } = req.params;
    let sqlQuery = 'UPDATE users SET';
    let inputArray = []; //created array to store input values
    Object.keys(req.body).forEach(key => { //loop through all the keys in req.body
        sqlQuery += key ? ` ${key} = ?, ` : ''; //if key is not empty, add it to sql query
        key ? inputArray.push(req.body[key]) : ''; //if key is not empty, add it to inputArray
    });
    sqlQuery += ' last_updated = NOW() WHERE id = ?'; //add last_updated to sql query
    inputArray.push(id); //add id to inputArray
    //console.log(sqlQuery); //print sql query
    // console.log(inputArray); //print inputArray
    connection.query(sqlQuery, inputArray, (err, result) => {
        if (err) {
            const resp = {
                success: false,
                message: 'Error' + err,
                data: null
            };
            res.status(400).send(resp)
        } else {
            const resp = {
                success: true,
                message: 'Details updated successfully',
                data: result
            };
            res.status(200).send(resp)
        }
    });
});

//delete user by id API
router.delete('/delete_user/:id', [checkadmin], (req, res) => {
    const { id } = req.params; //got id from URL parameter
    const sqlQuery = `DELETE FROM users WHERE id = ?`; //created sql query
    connection.query(sqlQuery, [id], (err, result) => {
        if (err) {
            const resp = {
                success: false,
                message: 'Error' + err,
                data: null
            };
            res.status(400).send(resp)
        } else {
            const resp = {
                success: true,
                message: 'Details deleted successfully',
                data: result
            };
            res.status(200).send(resp)
        }
    });
});

//get all user API
router.get('/get_all_user', [checkadmin], (req, res) => {
    const sqlQuery = `SELECT * FROM users`; //created sql query
    connection.query(sqlQuery, (err, result) => {
        if (err) {
            const resp = {
                success: false,
                message: 'Error' + err,
                data: null
            };
            res.status(400).send(resp)
        } else {
            const resp = {
                success: true,
                message: 'Details fetched successfully',
                data: result
            };
            res.status(200).send(resp)
        }
    });
});

//get user by id API
router.get('/get_user/:id', [checkadmin], (req, res) => {
    const { id } = req.params; //got id from URL parameter
    const sqlQuery = `SELECT * FROM users WHERE id = ?`; //created sql query
    connection.query(sqlQuery, [id], (err, result) => {
        if (err) {
            const resp = {
                success: false,
                message: 'Error' + err,
                data: null
            };
            res.status(400).send(resp)
        } else {
            const resp = {
                success: true,
                message: 'Details fetched successfully',
                data: result
            };
            res.status(200).send(resp)
        }
    });
});

module.exports = router;