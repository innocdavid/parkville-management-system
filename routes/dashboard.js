const express = require('express')
const router = express.Router()


//setting up the model
let Customer = require('../models/new_customer_schema')
let Tire = require('../models/tire_clinic')
//setting the route
router.get('/dashboard', (req, res) => {
    Customer.find({}, (err, docs) => {
        if(err) {
            console.log(err)
        } else {
            res.render('main-dashboard', {
                docs: docs
            })
        }   
    })
    
})

router.get('/', (req, res) => {
    Customer.find({}, (err, docs) => {
        if(err) {
            console.log(err)
        } else {
            res.render('dashboard', {
                docs: docs  
            })
        }
    })
})

//exporting the module
module.exports = router