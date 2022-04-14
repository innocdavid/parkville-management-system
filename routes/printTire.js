//importing the required dependencies
const express = require('express')
const { render } = require('pug')
const router = express.Router()

//importing the schema
let Tire = require('../models/tire_clinic')

//setting the route
router.get('/print-tire/:id', (req, res) => {
    Tire.findById(req.params.id, (err, details) => {
        if(err) {
            console.log(err)
        } else {
            res.render('tire-receipt', {
                title: 'Tire Receipt',
                details: details
            })
        }
    })
    
})
module.exports =  router