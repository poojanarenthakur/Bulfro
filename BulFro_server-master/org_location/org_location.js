const express = require('express');
const router = express.Router();
const { connection } = require('../db')
const { validationResult } = require('express-validator');
const { org_location_validation } = require('../validation/validation');
const { verifyToken, checkadmin } = require('../middleware/jwt')

router.use((req, res, next) => {
    console.log('Times: ', Date.now());
    console.log('org_location');
    next();
}, [verifyToken])


//add org_location API
router.post('/add_org_location', [checkadmin], org_location_validation(), (req, res) => {
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
            org_id,
            name,
            lat,
            longi,
            address,
            contact_person,
            contact_number } = req.body;
        const query = `INSERT INTO org_location(org_id, name, lat, longi, address, contact_person, contact_number)
     VALUES (?, ?, ?, ?, ?, ?, ?)`;
        connection.query(query, [org_id, name, lat, longi, address, contact_person, contact_number], (error, result) => {
            if (error) {
                const resp = {
                    success: false,
                    message: ' error ' + error,
                    data: null
                }
                res.status(400).send(resp)
            } else {
                const resp = {
                    success: true,
                    message: 'org_location data added',
                    data: result
                }
                res.status(200).send(resp)
            }

        });
    }
});

//update org_location by id API
router.put('/update_org_location/:id', [checkadmin], (req, res) => {
    const { id } = req.params;
    let sqlQuery = 'UPDATE org_location SET';
    let inputArray = []; //created array to store input values
    Object.keys(req.body).forEach(key => { //loop through all the keys in req.body
        sqlQuery += key ? ` ${key} = ?, ` : ''; //if key is not empty, add it to sql query
        key ? inputArray.push(req.body[key]) : ''; //if key is not empty, add it to inputArray
    });
    sqlQuery += 'last_updated = NOW() WHERE id = ?'; //add last_updated to sql query
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

//delete org_location by id API
router.delete('/delete_org_location/:id', [checkadmin], (req, res) => {
    const { id } = req.params; //got id from URL parameter
    const sqlQuery = `DELETE FROM org_location WHERE id = ?`; //created sql query
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

//get all org_location API
router.get('/get_all_org_location', [checkadmin], (req, res) => {
    const sqlQuery = `SELECT * FROM org_location`; //created sql query
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

//get admin by id API
router.get('/get_org_location/:id', [checkadmin], (req, res) => {
    const { id } = req.params; //got id from URL parameter
    const sqlQuery = `SELECT * FROM org_location WHERE id = ?`; //created sql query
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


module.exports = router
