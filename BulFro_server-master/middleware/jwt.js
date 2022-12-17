const jwt = require('jsonwebtoken');

const pass = 'jejwhfjekk fejfhefejbe efehjefjhfbejff ffbefjefjhebfjhfbhfjjhgh';

function verifyToken(req, res, next) {
    if (req.url == '/admin_login' || req.url == '/user_login') {
        next();
    } else {
        const token = req.headers['authorization'];
        if (token) {
            jwt.verify(token, pass, (err, decoded) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Auth failed'
                    });
                }
                req.decoded = decoded;
                next();
            });
        }
    }
}

function checkadmin(req, res, next) {
    const role = req.decoded.role;
    if (role === 'admin') {
        next();
    } else {
        res.status(403).json({
            success: false,
            message: 'You are not authorize.'
        });
    }
}

function checkuser(req, res, next) {
    const role = req.decoded.role;
    if (role === 'user') {
        next();
    } else {
        res.status(403).json({
            success: false,
            message: 'You are not authorize.'
        });
    }
}

module.exports = { verifyToken, checkadmin, checkuser, pass };