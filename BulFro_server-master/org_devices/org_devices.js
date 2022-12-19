
const express = require('express');
const router = express.Router();


router.use((req, res) => {
    console.log('Times:  ', Date.now());
    console.log('org_devices');
},)




module.exports = router;