//importar express
const express = require('express');
const router = express.Router();
/**Controladores */
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesControler = require('../controllers/testimonialesController');

module.exports = function(){
    //Ruta Index
    router.get('/', homeController.consultaHomePage);
    //Ruta Nosotros
    router.get('/nosotros', nosotrosController.infoNosotros);
    //Ruta Viajes
    router.get('/viajes', viajesController.mostrarViajes);
    //Ruta Viajes por ID
    router.get('/viajes/:id', viajesController.mostrarViajeId);
    //Ruta Testimoniales GET
    router.get('/testimoniales', testimonialesControler.mostrarTestimoniales);
    //Ruta Testimoniales POST
    //cuando se llena el formulario
    router.post('/testimoniales', testimonialesControler.agregarTestimonial);

    return router;
}