const express = require('express');
const router = express.Router();
const { connection } = require('../db');
const { verifyToken, checkadmin } = require('../middleware/jwt');
const { validationResult } = require('express-validator');
const { user_access_validation } = require('../validation/validation');
const bodyparser = require('body-parser');
const jsonParser = bodyparser.json();

router.use((req, resp, next) => {
    console.log('Times: ', Date.now());
    console.log('user_access');
    next();
}, [verifyToken])

//add users_access API
router.post('/add_user_access', [checkadmin], user_access_validation(), (req, res) => {
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
            user_id,
            org_id,
            org_location_id,
            project_id
        } = req.body;
        const sqlQuery = `INSERT INTO user_access(user_id, org_id, org_location_id, project_id) 
    VALUES (?, ?, ?, ?)`;
        connection.query(sqlQuery, [user_id, org_id, org_location_id, project_id], (error, result) => {
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
                    message: 'user_access added sucessfully',
                    data: result
                }
                res.status(200).send(resp);

            }
        });
    }
});

//update user_access by id API
router.put('/update_user_access/:id', [checkadmin], (req, res) => {
    const { id } = req.params;
    let sqlQuery = 'UPDATE user_access SET';
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

//delete user_access by id API
router.delete('/delete_user_access/:id', [checkadmin], (req, res) => {
    const { id } = req.params; //got id from URL parameter
    const sqlQuery = `DELETE FROM user_access WHERE id = ?`; //created sql query
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

//get all user_access API
router.get('/get_all_user_access', [checkadmin], (req, res) => {
    const sqlQuery = `SELECT * FROM user_access`; //created sql query
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
router.get('/get_user_access/:id', [checkadmin], (req, res) => {
    const { id } = req.params; //got id from URL parameter
    const sqlQuery = `SELECT * FROM user_access WHERE id = ?`; //created sql query
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