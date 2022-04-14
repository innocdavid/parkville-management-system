//importing required dependencies
const express           = require('express')
const path              = require('path')
const mongoose          = require('mongoose')
const bodyParser        = require('body-parser')
const expressValidator  = require('express-validator')
const flash             = require('connect-flash')
const session           = require('express-session')
const config            = require('./config/database')
const passport          = require('passport')

const { param } = require('express-validator')

//setting the database
mongoose.connect(config.database)
let db = mongoose.connection;
//checking connection
db.once('open', () => {
    console.log('Connected to MongoDB')
})
//checking for db error
db.on('error', (err) => {
    console.log(err)
})

//setting express to a variable app
const app = express()


//MIDDLEWARE engines
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

//express - session
app.use(session({
    secret: 'dkfa;sdklfja',
    resave: true,
    saveUninitialized: true,
}))
//express - messages
app.use(require('connect-flash')())
app.use((req, res, next) => {
    res.locals.messages = require('express-messages')(req, res)
    next()
})
//express - validator 
app.use(expressValidator({
  errorFormatter: function (param, msg, value) {
    var namespace = param.split('.')
      , root = namespace.shift()
      , formParam = root;

    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

//passport config folde
require('./config/passport')(passport)
//passport mIDDLEWARES
app.use(passport.initialize())
app.use(passport.session())

//universal route
app.get('*', (req, res, next) => {
  res.locals.user = req.user || null
  next()
})

//setting a route
let register = require('./routes/register')
let login = require('./routes/login')
let dashboard = require('./routes/dashboard')
let logout = require('./routes/logout')
let addVehicle = require('./routes/add-vehicle')
let hireBattery = require('./routes/hire-battery')
let tireGarage = require('./routes/tire-garage')
let customer = require('./routes/newCustomer')
let editCustomer = require('./routes/updateCustomer')
let printReceipt = require('./routes/printDetails')
let newTire = require('./routes/newTire')
let editTire = require('./routes/updateTire')
let printTire = require('./routes/printTire')

//using the route
app.use('/', register)
app.use('/', login)
app.use('/', dashboard)
app.use('/', logout)
app.use('/', addVehicle)
app.use('/', hireBattery)
app.use('/', tireGarage)
app.use('/', customer)
app.use('/', editCustomer)
app.use('/', printReceipt)
app.use('/', newTire)
app.use('/', editTire)
app.use('/', printTire)

//setting the server to listen
app.listen(3000, () =>  {
    console.log('Server listening on PORT 3000.....')
})