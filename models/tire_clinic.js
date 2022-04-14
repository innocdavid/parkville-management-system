//importing required dependencies
const mongoose = require('mongoose')

//defining the schema
let tireSchema = mongoose.Schema({
    //fields to insert
    firstname       :{ type:String, required: true },
    lastname        :{ type: String, required: true },
    telephone       :{ type: String, required: true },
    platenumber     :{ type: String, required: true },
    carmodel        :{ type: String, required: true },
    checkintime     :{ type: Date, required: true },
    tirefault       :{ type: String, required: true},
    repairstatus    :{ type: String, required: false },
    cost            :{ type: Number, required: true },
    mechanic        :{ type: String, required: true},
    checkouttime    :{ type: Date, required: false}
})

//exporting the module
let Tire = module.exports = mongoose.model('Tire', tireSchema)