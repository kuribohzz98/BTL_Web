const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const app = express()
const login = require("./router/login")
const admin = require("./router/admin")
const mongo = require('mongoose')
const config = require("./config/config")
const passport = require("passport")
const session = require("express-session")
const student = require('./router/student')
const teacher = require('./router/teacher')

require("./controllers/auth")

app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, '../ui/dist/ui')))
// app.use(session({
//     secret : 'secured_key',
//     resave : false,
//     saveUninitialized : false
// })) 
// app.use(passport.session())

mongo.connect(`mongodb://${config.mongo.IP}:${config.mongo.port}/${config.mongo.db}`,{useNewUrlParser: true})
app.use(`${config.hostAPI}/login`, login)
app.use(`${config.hostAPI}/admin`,passport.authenticate('jwt', {session: false}), admin)
app.use(`${config.hostAPI}/student`,passport.authenticate('jwt', {session: false}), student)
app.use(`${config.hostAPI}/teacher`,passport.authenticate('jwt', {session: false}), teacher)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'./ui/dist/ui/index.html'))
})

const port = process.env.PORT || config.port
app.listen(port, (req, res) => {
    console.log('Running')
})