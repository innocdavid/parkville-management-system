const express = require('express')
const router = express.Router()

//setting the logout route
router.get('/logout', (req, res) => {
    req.logout()
    req.flash('success', 'Logged out successfully')
    res.redirect('/login')
})

//exporting the route
module.exports = router