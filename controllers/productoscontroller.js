var mysql = require('mysql');
var dateFormat = require('dateformat');


// productos controller

module.exports = {

    //funciones del controlador

    getProductos : function(req, res, next){
        var config = require('.././database/config')

        var db = mysql.createConnection(config);
        db.connect();

        var productos = null;

        db.query('SELECT * FROM productos', function(err, rows, fields){
            if(err) throw err;

            productos = rows;
            db.end();
            res.render('productos/productos', {productos : productos});
        });
        
    },

    getNuevoProducto : function(req, res, next){
        res.render('productos/nuevo');  
    },

    postNuevoProducto : function(req, res, next){
       // console.log(req.body);
       var fechaactual = new Date();
       var fecha = dateFormat(fechaactual, 'yyyy-mm-dd h:MM:ss');

       var producto =  {
           nombre : req.body.nombre,
           precio : req.body.precio,
           stock : req.body.stock,
           fecha_creacion : fecha
       }

      var config = require('.././database/config')

        var db = mysql.createConnection(config);
        db.connect();
        db.query('INSERT INTO productos SET ?', producto, function(err, rows, fields){
            if(err) throw err;

            db.end();
        });

        res.render('productos/nuevo'    , {info : 'Producto creado correctamente'});
        
    },

    eliminarProducto : function(req, res, next){

        var id = req.body.id;

        var config = require('.././database/config')

        var db = mysql.createConnection(config);
        db.connect();

        var respuesta = {res: false};

        db.query('DELETE FROM productos WHERE id_producto = ?', id, function(err, rows, fields ){
            if(err) throw err;
               
            db.end();
            respuesta.res = true;

            res.json(respuesta);
        });




    }
}