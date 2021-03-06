const express = require( 'express' );
const app = express();
const cors = require( 'cors' );

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/users';

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();

    }

    middlewares() {

        // Directorio publico
        this.app.use( express.static( 'public' ) );

        // Parseo y lectura de body
        this.app.use( express.json() ); // Serializa a formato json

        // CORS
        this.app.use( cors() );

    }

    routes() {

        this.app.use( this.usuariosPath, require( '../routes/user-routes' ) ); 

    }

    listen() {

        this.app.listen(this.port, () => {

            console.log( `Listening on port ${this.port}` );
        
        });

    }

}

module.exports = Server;