//importing required dependencies
const express = require('express')
const { default: mongoose } = require('mongoose')
const router = express.Router()

//accessing the model
let Customer = require('../models/new_customer_schema')

//setting the route
router.get('/new-customer', (req, res) => {
    res.render('new_customer')
})

//adding SUBMIT POST    
router.post('/new-customer', (req, res) => {
    
    insertCustomer(req, res)
})

function insertCustomer(req, res) {
    //getting the model
    let customer = new Customer()
    //preparing fields to insert to the datebase
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

    //saving the date
    customer.save((err) => {
        //checking for errors
        if(err){
            console.log(err)
            return
        } else {
            
            res.redirect('/vehicle')
        }
    })
}
//exporting the module
module.exports = router