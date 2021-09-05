const express = require('express')
const cors = require('cors'); 

class Server{

    constructor () {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutePath = '/api/usuarios';


        //Middlewares
        this.middlewares();


        //Rutas de aplicación
 
        this.routes();
    }

    middlewares () {

        ///CORS
        this.app.use(cors());

        //Lectura y parseo del Body
        this.app.use(express.json())

        //Directorio público
        this.app.use(express.static('public'));
    }   

    routes (){
        this.app.use(this.usuariosRoutePath, require('../routers/usuarios'));
    }

    listen (){
        this.app.listen(this.port,() => {
            console.log('Puerto corriendo en', this.port);
        });
    }
}

module.exports = Server;