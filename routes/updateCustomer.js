//importing the required dependencies
const express = require('express')
const router = express.Router()

//setting the schema
let Customer = require('../models/new_customer_schema')


//loading edit form
router.get('/update-customer/:id', (req, res) => {
    Customer.findById(req.params.id, (err, docs) => {
        res.render('edit-customer', {
            title: 'Updating Customer Information',
            docs: docs
        })
    })
})

//updating customer information
router.post('/update-customer/:id', (req, res) => {
    //creating an empty object to hold data
    let customer = {}
    //
    customer.firstname      = req.body.firstname
    customer.lastname       = req.body.lastname
    customer.email          = req.body.email
    customer.telephone      = req.body.telephone
    customer.platenumber    = req.body.platenumber
    customer.carmodel       = req.body.carmodel
    customer.carcolor       = req.body.carcolor
    customer.datetime       = req.body.datetime
    customer.duration       = req.body.duration
    customer.cost           = req.body.cost
    customer.parkingstatus  = req.body.parkingstatus
    customer.checkouttime   = req.body.checkouttime


    Customer.findByIdAndUpdate({_id:req.params.id}, customer, (err) => {
        if(err) {
            console.log(err)
        } else {
            res.redirect('/vehicle')
        }
    })

})
  

//exporting the router
module.exports = router