
const express = require('express');
const router = express.Router();
const { connection } = require('../db');
const { verifyToken, checkadmin } = require('../middleware/jwt');
const { validationResult } = require('express-validator');
const { org_validation } = require('../validation/validation');


router.use((req, res, next) => {
    console.log('Times:  ', Date.now());
    console.log('org');
    next();
}, [verifyToken])

//add org API
router.post('/add_org', [checkadmin], org_validation(), (req, res) => {
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
            org_name,
            lat,
            longi,
            address,
            contact_person,
            contact_number,
        } = req.body;
        const sqlQuery = `INSERT INTO org(org_name, lat, longi, address, contact_person, contact_number) 
    VALUES (?,?,?,?,?,?)`;
        connection.query(sqlQuery, [org_name, lat, longi, address, contact_person, contact_number], (error, result) => {
            if (error) {
                const resp = {
                    success: false,
                    message: 'error',
                    data: null
                }
                res.status(400).send(resp);
            }
            else {
                const resp = {
                    success: true,
                    message: 'organization add successfully',
                    data: result
                }
                res.status(200).send(resp);

            }
        })
    }

})

//update org API
router.put('/update_org/:id', [checkadmin], (req, res) => {
    const { id } = req.params;
    let sqlQuery = 'UPDATE org SET';
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

//get all org API
router.get('/get_all_org', [checkadmin], (req, res) => {
    const sqlQuery = `SELECT * FROM org`; //created sql query
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

//get org by id API
router.get('/get_org/:id', [checkadmin], (req, res) => {
    const { id } = req.params; //got id from URL parameter
    const sqlQuery = `SELECT * FROM org WHERE id = ?`; //created sql query
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

//delete org by id API
router.delete('/delete_org/:id', [checkadmin], (req, res) => {
    const { id } = req.params; //got id from URL parameter
    const sqlQuery = `DELETE FROM org WHERE id = ?`; //created sql query
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

module.exports = router;