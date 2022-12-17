const { check, validationResult } = require('express-validator');

function admin_validation() {
    return [
        check('first_name').not().isEmpty().withMessage('First Name is required'),
        check('last_name').isLength({ min: 4 }).withMessage('Last Name is required'),
        check('email').not().isEmail().withMessage('Email is invalid').isLength({ min: 8 }).withMessage('Email should be at least 3 characters long'),
        check('username').not().isEmpty().withMessage('username is required'),
        check('password').isLength({ min: 6 }).withMessage('Password is required'),
        check('mobile').not().isEmpty().withMessage('Phone is required').isLength({ min: 11, max: 11 }).withMessage('Phone must be 10 digit'),
        check('address').not().isEmpty().withMessage('address is required')
    ]
}

function user_validation() {
    return [
        check('first_name').not().isEmpty().withMessage('First Name is required'),
        check('last_name').isLength({ min: 4 }).withMessage('Last Name is required'),
        check('email').not().isEmail().withMessage('Email is invalid').isLength({ min: 8 }).withMessage('Email should be at least 3 characters long'),
        check('username').not().isEmpty().withMessage('username is required'),
        check('password').isLength({ min: 6 }).withMessage('Password is required'),
        check('mobile').not().isEmpty().withMessage('Phone is required').isLength({ min: 11, max: 11 }).withMessage('Phone must be 10 digit'),
        check('address').not().isEmpty().withMessage('address is required'),
        check('is_active').not().isEmpty().withMessage('is_active is required'),
        check('org_id').not().isEmpty().withMessage('org_id is required'),
        check('location_id').not().isEmpty().withMessage('location_id is required'),
    ]
}

function org_validation() {
    return [
        check('org_name').not().isEmpty().withMessage('org_name is required'),
        check('lat').not().isEmpty().withMessage('lat is required'),
        check('longi').not().isEmpty().withMessage('longi is required'),
        check('address').not().isEmpty().withMessage('address is required'),
        check('contact_person').not().isEmpty().withMessage('contact_person is required'),
        check('contact_number').not().isEmpty().withMessage('contact_number is required').isLength({ min: 11, max: 11 }).withMessage('Phone must be 10 digit')
    ]

}

function org_location_validation() {
    return [
        check('org_id').not().isEmpty().withMessage('org_id is required'),
        check('name').not().isEmpty().withMessage('name is required'),
        check('lat').not().isEmpty().withMessage('lat is required'),
        check('longi').not().isEmpty().withMessage('longi is required'),
        check('address').not().isEmpty().withMessage('address is required'),
        check('contact_person').not().isEmpty().withMessage('contact_person is required'),
        check('contact_number').not().isEmpty().withMessage('contact_number is required').isLength({ min: 11, max: 11 }).withMessage('Phone must be 10 digit')
    ]
}

function user_access_validation() {
    return [
        check('user_id').not().isEmpty().withMessage('user_id is required'),
        check('org_id').not().isEmpty().withMessage('org_id is required'),
        check('org_location_id').not().isEmpty().withMessage('org_location_id is required'),
        check('project_id').not().isEmpty().withMessage('project_id is required')
    ]
}

function project_validation() {
    return [

        check('project_name').not().isEmpty().withMessage('project_name'),
        check('org_id').not().isEmpty().withMessage('org_id is required'),
        check('org_location_id').not().isEmpty().withMessage('org_location_id is required'),
        check('current_status').not().isEmpty().withMessage('current_status')
    ]
}
module.exports = { admin_validation, user_validation, org_validation, org_location_validation, user_access_validation, project_validation };



