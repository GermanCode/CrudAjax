var mysql = require('mysql');var dateFormat = require('dateformat');


// productos controller

module.exports = {

    //funciones del controlador

    getUsuarios : function(req, res, next){
        var config = require('.././database/config')

        var db = mysql.createConnection(config);
        db.connect();

        var usuarios = null;

        db.query('SELECT * FROM usuarios', function(err, rows, fields){
            if(err) throw err;

            usuarios = rows;
            db.end();
            res.render('usuarios/usuarios', {usuarios : usuarios});
        });
        
    },

    getLogin : function(req, res, next){
        res.render('login/login', {title:'Login2'});  
    },

    getNuevoUsuario : function(req, res, next){
        res.render('usuarios/nuevousuario');  
    },

    postNuevoUsuario : function(req, res, next){
       // console.log(req.body);
       var fechaactual = new Date();
       var fecha = dateFormat(fechaactual, 'yyyy-mm-dd h:MM:ss');

       var usuario =  {
           user : req.body.user,
           password : req.body.password,
           fecha_creacion : fecha
       }

      var config = require('.././database/config')

        var db = mysql.createConnection(config);
        db.connect();
        db.query('INSERT INTO usuarios SET ?', usuario, function(err, rows, fields){
            if(err) throw err;

            db.end();
        });

        res.render('usuarios/nuevousuario'    , {info : 'Producto creado correctamente'});
        
    },

    eliminarUsuario : function(req, res, next){

        var user = req.body.user;

        var config = require('.././database/config')

        var db = mysql.createConnection(config);
        db.connect();

        var respuesta = {res: false};

        db.query('DELETE FROM usuarios WHERE user = ?', user, function(err, rows, fields ){
            if(err) throw err;
               
            db.end();
            respuesta.res = true;

            res.json(respuesta);
        });

    },

    getModificarUsuario : function(req, res, next){

        var user = req.params.user;
       
        var config = require('.././database/config')

        var db = mysql.createConnection(config);
        db.connect();

        var usuario = null;

        db.query('SELECT * FROM usuarios WHERE user = ?', user, function(err, rows, fields){

            if(err) throw err;

            usuario  = rows;
            db.end();
            res.render('usuarios/modificarusuarios', {usuario:usuario});
        });
        
    },

    postModificarUsuario : function(req, res, next){

         var usuario =  {
           user : req.body.user,
           password : req.body.password
       }

        var config = require('.././database/config')

            var db = mysql.createConnection(config);
            db.connect();

            db.query('UPDATE usuarios SET ? WHERE ?', [usuario, {user : req.body.user}], function(err, rows, fields){
                
                if(err) throw err;
                db.end();
            });

            res.redirect('/usuarios');

    }
}