//importing the required dependencies
const express = require('express')
const router = express.Router()

//setting the schema
let Tire = require('../models/tire_clinic')


//loading edit form
router.get('/update-tire/:id', (req, res) => {
    Tire.findById(req.params.id, (err, docs) => {
        res.render('edit-tire', {
            title: 'Updating Tire Repair Information',
            docs: docs
        })
    })
})

//updating customer information
router.post('/update-tire/:id', (req, res) => {
    //creating an empty object to hold data
    let customer = {}
    //
    customer.firstname      = req.body.firstname
    customer.lastname       = req.body.lastname
    customer.telephone      = req.body.telephone
    customer.platenumber    = req.body.platenumber
    customer.carmodel       = req.body.carmodel
    customer.checkintime    = req.body.checkintime
    customer.tirefault      = req.body.tirefault
    customer.repairstatus   = req.body.repairstatus
    customer.cost           = req.body.cost
    customer.mechanic       = req.body.mechanicc
    customer.checkouttime   = req.body.checkouttime


    Tire.findByIdAndUpdate({_id:req.params.id}, customer, (err) => {
        if(err) {
            console.log(err)
        } else {
            res.redirect('/garage')
        }
    })

})
  

//exporting the router
module.exports = router