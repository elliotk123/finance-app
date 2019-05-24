const express = require('express');
const router = express.Router();
const controller = require('./controller.js')

router.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    next();
})
router.route('/')
    .get(controller.getDataController)

module.exports = router;