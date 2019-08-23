const path = require('path');
const express = require('express');

const app = express();


// setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// setup static public
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('');
});
app.get('/detail/:id', (req, res) => {
    res.render('');
});


app.listen(2020, () => {
    console.log('Server Berjalan pada Port 2020');
});