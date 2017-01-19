var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');

/* GET home page. */
router.get('/', controllers.homecontroller.index);

//rutas para productos
router.get('/productos', controllers.productoscontroller.getProductos);
router.get('/nuevo', controllers.productoscontroller.getNuevoProducto);
router.post('/crearproducto', controllers.productoscontroller.postNuevoProducto);
router.post('/eliminarproducto', controllers.productoscontroller.eliminarProducto);
router.get('/modificar/:id', controllers.productoscontroller.getModificarProducto);
router.post('/editar', controllers.productoscontroller.postModificarProducto);
router.get('/login', controllers.homecontroller.login);

//rutas para usuarios
router.get('/usuarios', controllers.logincontroller.getUsuarios);
router.get('/usuarios/nuevousuario', controllers.logincontroller.getNuevoUsuario);
router.post('/usuarios/crearusuario', controllers.logincontroller.postNuevoUsuario);
router.get('/modificarusuarios/:user', controllers.logincontroller.getModificarUsuario);
router.post('/editarU', controllers.logincontroller.postModificarUsuario);
router.post('/eliminarusuario', controllers.logincontroller.eliminarUsuario);



module.exports = router;
