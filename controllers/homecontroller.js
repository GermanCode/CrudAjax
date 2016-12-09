
module.exports = {

    index : function(req, res, next){
        res.render('index', {title: 'Bienvenido al CRUD con NODE JS parte II'})
    }
}