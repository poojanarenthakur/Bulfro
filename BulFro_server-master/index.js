const mysql = require('mysql2');
const { connection } = require('./db');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const login = require('./login/login')
const admin = require('./admin/admin');
const devices = require('./devices/devices');
const org = require('./org/org');
const org_devices = require('./org_devices/org_devices');
const org_location = require('./org_location/org_location');
const users = require('./users/users');
const user_access = require('./user_access/user_access');
const projects = require('./projects/project');

app.use('/login', login)
app.use('/admin', admin);
app.use('/devices', devices);
app.use('/org', org);
app.use('/org_devices', org_devices);
app.use('/org_location', org_location);
app.use('/users', users);
app.use('/user_access', user_access);
app.use('/projects', projects);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = { connection }

