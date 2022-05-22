const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const bodyParser = require('body-parser');

app.use(express.static('./assets'));

// use express router
app.use('/', require('./routes'));      // middleware
// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({extended: false}));

const tasks = [
    {
        task: "Why not add a task",
        date: "2022-05-22",
        category: "Homework"
    },
    {
        task: "Let's make a TODO App",
        date: "2022-05-20",
        category: "Project"
    },
    {
        task: "Annual report submission deadline",
        date: "2022-06-01",
        category: "Work"
    }
]


app.listen(port, function(err){
    if(err){
        console.log(`${err} error occured in running the server`);
    }
    console.log(`Server is up & running at port ${port}`);
});