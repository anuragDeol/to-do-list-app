module.exports.home = function(req, res){
    return res.render('home.ejs', {
        title: "To Do List App Home"
    });
}