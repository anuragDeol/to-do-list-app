const express = require('express');
const app = express();
const port = 8000;

// use express router
app.use('/', require('./routes'));      // middleware

app.listen(port, function(err){
    if(err){
        console.log(`${err} error occured in running the server`);
    }
    console.log(`Server is up & running at port ${port}`);
});