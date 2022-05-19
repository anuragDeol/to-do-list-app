const express = require('express');
const app = express();
const port = 8000;

// use express router
app.use('/', require('./routes'));      // middleware
// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log(`${err} error occured in running the server`);
    }
    console.log(`Server is up & running at port ${port}`);
});