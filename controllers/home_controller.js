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

module.exports.home = function(req, res){
    return res.render('home.ejs', {
        title: "To Do List App",
        tasksArr: tasks
    });
}

