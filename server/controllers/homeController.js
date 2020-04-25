const Viaje = require('../models/Viajes');
const Testimoniales = require('../models/Testimoniales');

exports.consultaHomePage = async (req, res) => {
    const viajes = await Viaje.findAll({limit: 3});

    const testimoniales = await Testimoniales.findAll({limit: 3});
    
    res.render('index', {
        clase: 'home',
        viajes: viajes,
        testimoniales: testimoniales
    });
}




/* //Con Promises
exports.consultaHomePage = (req, res) => {
    const promises = [];
    promises.push(
        Viaje.findAll({
            limit: 3
        })
    );
    promises.push(
        Testimoniales.findAll({
            limit: 3
        })
    );
    //pasar el promise y ejecutarlo
    const resultado = Promise.all(promises);
    
    resultado
    .then(resultado =>  res.render('index', {
        clase: 'home',
        viajes: resultado[0],
        testimoniales: resultado[1]
    }))
    .catch(error => console.log(error));
}*/