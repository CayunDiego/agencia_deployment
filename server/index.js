//importar express
const express = require('express');
const path = require('path');
const routes = require('./routes');
const configs = require('./config');
const bodyParser = require('body-parser');

require('dotenv').config({path: 'variables.env'});

//Probando la conexion de la DB
//db.authenticate()
//    .then(() => console.log('DB Conectada...'))
//    .catch(error => console.log(error));
    
//configurar express
const app = express();

//Habilitar Pug
app.set('view engine', 'pug');

//Añadir las vistas
app.set('views', path.join(__dirname, './views'));

//cargar una carpeta estatica llamada public
app.use(express.static('public'));


//validar si estamos en desarrollo o en producion (video 268)
const config = configs[app.get('env')];
//creamos la variable para el sitio web
app.locals.titulo = config.nombresitio;

//Muestra el año actual y genera la ruta  - aca estamos usando middleware
app.use((req, res, next) => {
    //crear una nueva fecha
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;
    console.log(res.locals);
    return next();
});

//ejecutamos el bodyParser
app.use(bodyParser.urlencoded({extended: true}));

//cargar las rutas
app.use('/', routes());

/**Puerto y host para la app */
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
    console.log('El servidor está funcionando');
});