const express = require('express');
const router = express.Router();
const controller = require('./controller.js')

router.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT',
        'Access-Control-Allow-Headers': '*'
    })
    next();
})
router.route('/')
    .get(controller.getDataController)
    .put(controller.putDataController)

module.exports = router;