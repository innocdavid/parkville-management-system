//importing required modules
const express = require('express')
const router = express.Router()

//setting the model
let Tire = require('../models/tire_clinic')

//setting the route
router.get('/garage', (req, res) => {
    Tire.find({}, (err, docs) => {
        res.render('tire-garage', {
            docs: docs,

    
        })
    })
})

//adding SUBMIT POST    
router.post('/garage', (req, res) => {
    
    insertCustomer(req, res)
})

function insertCustomer(req, res) {
    //getting the model
    let customer = new Tire()
    //preparing fields to insert to the datebase
    customer.firstname      = req.body.firstname
    customer.lastname       = req.body.lastname
    customer.telephone      = req.body.telephone
    customer.platenumber    = req.body.platenumber
    customer.carmodel       = req.body.carmodel
    customer.checkintime    = req.body.checkintime
    customer.tirefault      = req.body.tirefault
    customer.repairstatus   = req.body.repairstatus
    customer.cost           = req.body.cost
    customer.checkouttime   = req.body.checkouttime

    //saving the date
    customer.save((err) => {
        //checking for errors
        if(err){
            console.log(err)
            return
        } else {
            
            res.redirect('/garage')
        }
    })
}

//exporting the module
module.exports = router