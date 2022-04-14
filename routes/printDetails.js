//importing the required dependencies
const express = require('express')
const { render } = require('pug')
const router = express.Router()

//importing the schema
let Customer = require('../models/new_customer_schema')

//setting the route
router.get('/print/:id', (req, res) => {
    Customer.findById(req.params.id, (err, details) => {
        if(err) {
            console.log(err)
        } else {
            res.render('print', {
                title: 'Receipt',
                details: details
            })
        }
    })
    
})
module.exports =  router