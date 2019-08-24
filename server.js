const path = require('path');
const express = require('express');
// const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

const controllers = require('./controllers')

// setup db
const db = require('./models').sequelize
// const db = new Sequelize('nodebelajar', 'postgres', 'galih', {
//     host: 'localhost', 
//     dialect: 'postgres'
// });



// setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// setup static public
app.use(express.static('public'));

// setup Body-parser
app.use(bodyParser.urlencoded({extended: true}));
// setup for parsing application/x-www-form-urlencoded
app.use(methodOverride('_method'))

// Routes
app.get('/', controllers.index)
app.get('/add', controllers.add)
app.post('/save', controllers.save)
app.get('/detail/:id', controllers.details)
// app.get('/edit/:id', controllers.edit)
// app.put('/update', controllers.update)
// app.get('/remove/:id', controllers.remove)


app.listen(3000, () => {
    console.log('Server Berjalan pada Port 3000');
});