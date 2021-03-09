// Purpose: The purpose of this project is to practice our java script skills and demonstrate what we have learned though self teaching
// Class: DPI910
// Authors: Brian Sawa, Eugene Makavets, Ali Mokabbery

const express = require('express')
const path = require('path')
const members = require('./Members.js')
const logger = require('./middleware/logger')
const hbs = require('express-handlebars')

const app = express()
// Init Middleware
// function of JS that allows you to access the information of the current request response 
//app.use(logger)

// Handlebars Middleware
app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body parser for post requests middleware, lets us handle raw json
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Homepage Route
app.get('/', (req, res) => res.render('index', {
    title: 'Member App',
    members
}))

// Set static folder
//app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/members', require('./routes/api/members'))

//checks server environment for a port and if that is not available it will run on 5000
const PORT = process.env.PORT || 1234

app.listen(PORT, () => console.log(`Server Running and Started on ${PORT}`))