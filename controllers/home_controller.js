const todoModel = require('../models/todolist');    // require the model

module.exports.home = function(req, res){
    todoModel.find({}, function(err, myTodoModel){
        if(err){
            console.log('Error in fetching todo list item from db');
            return;
        }
        return res.render('home.ejs', {
            title: "MongoDB",
            tasksArr: myTodoModel
        });
    });
}

module.exports.addTask = function(req, res){
    todoModel.create({
        task: req.body.task,
        date: req.body.date,
        category: req.body.category
    }, function(err, newlyCreatedTodoItem){
        if(err){
            console.log(`${err} error encountered while adding to DB`);
            return;
        }
        return res.redirect('back');
    });
}

module.exports.deleteTask = function(req, res){
    const id = req.query.id;
    todoModel.findByIdAndDelete(id, function(err){
        if(err){
            console.log(`Unable to delete this todo item due to error ${err}`);
            return;
        }
        return res.redirect('back');
    });
}
