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
    },
    {
        task: "Go to basketball practice",
        date: '2022-05-22',
        category: "Other"
    }
]

const todoModel = require('./models/todolist')

module.exports.home = function(req, res){
    return res.render('home.ejs', {
        title: "To Do List App",
        tasksArr: tasks
    });
}

module.exports.addTask = function(req, res){
    // add the list item in the tasks[]
    tasks.push({
        task: req.body.task,
        date: req.body.date,
        category: req.body.category
    });
    console.log(req.body);
    return res.redirect('back');
}

module.exports.deleteTask = function(req, res){
    const t = req.query.task;
    const taskIndex = tasks.findIndex(i => i.task==t);
    if(taskIndex!==-1){
        tasks.splice(taskIndex, 1);
        console.log(`${t} deleted`);
    }
    return res.redirect('/');
}
