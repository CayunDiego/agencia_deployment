const Viaje = require('../models/Viajes');

//en este vamos a probar async (esto es lo correcto)
exports.mostrarViajes =  async (req, res) => {
    const viajes = await Viaje.findAll()
    res.render('viajes', {
            pagina: 'Próximos Viajes',
            viajes: viajes
    })
}

exports.mostrarViajeId = async (req, res) => {
    const viaje = await Viaje.findByPk(req.params.id)
    res.render('viaje', {viaje})
}

/*
exports.mostrarViajes =  (req, res) => {
    Viaje.findAll()
        .then(viajes =>  res.render('viajes', {
            pagina: 'Próximos Viajes',
            viajes: viajes
        }))
        .catch(error => console.log(error));
}

exports.mostrarViajeId = (req, res) => {
    Viaje.findByPk(req.params.id)
        .then(viaje => res.render('viaje', {viaje}))
        .catch(error => console.log(error));
}*/