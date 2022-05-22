const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const bodyParser = require('body-parser');

app.use(express.static('./assets'));

// use express router
// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', require('./routes'));      // middleware
app.listen(port, function(err){
    if(err){
        console.log(`${err} error occured in running the server`);
    }
    console.log(`Server is up & running at port ${port}`);
});