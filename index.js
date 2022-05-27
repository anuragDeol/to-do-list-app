const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const bodyParser = require('body-parser');

// create express app
app.use(express.static('./assets'));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// middleware to parse the request
app.use(bodyParser.urlencoded({extended: false}));

// use express router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`${err} error occured in running the server`);
    }
    console.log(`Server is up & running at port ${port}`);
});