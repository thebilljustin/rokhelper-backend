const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// routes
const lyceumRoutes = require('./routes/lyceumRoutes')
const authRoutes = require('./routes/authRoutes')


const dbURI = 'mongodb+srv://cheb:kvoY8iDqRcGiplLU@rokcalculator.sfrwo.mongodb.net/rokcalculator?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( res => {
        console.log('connected to db')
        app.listen(3000)
    }).catch( err => console.log(err))

// app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: "http://localhost:8080", credentials: true}))
app.use(bodyParser.json())  // will convert the body/params of every request to json


// app.get('/', ( req, res) => {
//     res.render('index', { title: 'ROK Calculator' })
// })

app.use('/api', authRoutes)
app.use('/api', lyceumRoutes)


// app.get('/troops', (req, res) => {
//     res.render('troops/index', { title: 'Troop Training Calculator' })
// })

// app.get('/resource', (req, res) => {
//     res.render('resource/index', { title: 'Resource Calculator' })
// })

// app.get('/speedups', (req, res) => {
//     res.render('speedups/index', { title: 'Speed Up Calculator' })
// })






