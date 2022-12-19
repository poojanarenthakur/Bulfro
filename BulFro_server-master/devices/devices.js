const express = require('express');
const router = express.Router()
const { connection } = require('../db');


router.use((req, res, next) => {
    console.log('Times: ', Date.now())
    console.log('devices');
    next();
},);

//add devices API
router.post('/add_devices', (req, res) => {
    const {
    } = req.body;
    const query = `INSERT INTO devices()
     VALUES (?, ?, ?, ?, ?, ?, ?)`;
    connection.query(query, [], (error, result) => {
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
                message: 'Device added',
                data: result
            }
            res.status(200).send(resp)
        }

    });
});

//update devices by id API
router.put('/update_devices/:id', (req, res) => {
    const { id } = req.params;
    let sqlQuery = 'UPDATE devices SET';
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

//delete devices by id API
router.delete('/delete_devices/:id', (req, res) => {
    const { id } = req.params; //got id from URL parameter
    const sqlQuery = `DELETE FROM devices WHERE id = ?`; //created sql query
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

//get all devices API
router.get('/get_all_devices', (req, res) => {
    const sqlQuery = `SELECT * FROM devices`; //created sql query
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

//get divices by id API
router.get('/get_devices/:id', (req, res) => {
    const { id } = req.params; //got id from URL parameter
    const sqlQuery = `SELECT * FROM divices WHERE id = ?`; //created sql query
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