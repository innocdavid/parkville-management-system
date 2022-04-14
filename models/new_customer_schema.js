//importing required dependencies
const mongoose = require('mongoose')

//defining the schema
let customerSchema = mongoose.Schema({
    //fields to insert
    firstname       :{ type:String, required: true },
    lastname        :{ type: String, required: true },
    email           :{ type: String, required: true },
    telephone       :{ type: String, required: true },
    platenumber     :{ type: String, required: true },
    carmodel        :{ type: String, required: true },
    carcolor        :{ type: String, required: true },
    datetime        :{ type: Date, required: true },
    duration        :{ type: String, required: true },
    cost            :{ type: Number, required: true },
    parkingstatus   :{ type: String, required: false },
    checkouttime    :{ type: Date, required: false}
})

//exporting the module
let Customer = module.exports = mongoose.model('Customer', customerSchema)