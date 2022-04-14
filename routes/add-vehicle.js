//importing required dependencies
const express = require('express')
const router = express.Router()

//setting the model
let Customer = require('../models/new_customer_schema')
//setting the user model
let User = require('../models/register')
//setting the route
router.get('/vehicle', (req, res) => {
    Customer.find({}, (err, docs) => {
        res.render('add-vehicle', {
            docs: docs,

    
        })

    })
    
})

//exporting the router
module.exports = router
