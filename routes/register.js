const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()

//setting the schema
let User = require('../models/register')

//register form
router.get('/register', (req, res) => {
    res.render('register', {
        title: 'signup page'
    })
})
//post requests
router.post('/register', (req, res) => {
    const username  = req.body.username
    const password = req.body.password
    const password2 = req.body.password2

    //validating
    req.checkBody('username', 'username required').notEmpty()
    req.checkBody('password', 'password required').notEmpty()
    req.checkBody('password2', 'passwords do not match').equals(req.body.password)

    let errors = req.validationErrors()
    if(errors) {
        res.render('register', {
            errors:errors
        })
    } else {
        let newUser = new User({
            username: username,
            password: password
        })
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err){
                    req.flash('Error: ', err)
                } else {
                    newUser.password = hash
                    newUser.save((err) => {
                        if(err) {
                            req.flash('Error: ', err)
                        }else {
                            req.flash('success', 'User Registered! Login Now')
                            res.redirect('/login')
                        }

                    })
                }
            })
        })
    }
})

module.exports = router