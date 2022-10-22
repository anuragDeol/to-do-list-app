require("dotenv").config();     // to read '.env' file
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
// const db = require("./config/mongoose");
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');

// create express app
app.use(express.static('./assets'));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// middleware to parse the request
app.use(bodyParser.urlencoded({extended: false}));

// use express router
app.use('/', require('./routes'));

// DB Connection
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Success! MongodbAtlas DB Connected");
    });

app.listen(port, function(err){
    if(err){
        console.log(`${err} error occured in running the server`);
    }
    console.log(`Server is up & running at port ${port}`);
});