//importing required dependencies
const express = require('express')
const router = express.Router()

//setting routes
router.get('/battery', (req, res) => {
    res.render('hire-battery')
})

//exporting the module
module.exports = router

