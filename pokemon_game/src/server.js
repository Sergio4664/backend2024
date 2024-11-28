const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;

         // Configurar middlewares
         this.middlewares();

         // Configurar rutas
         this.routes();
    }
    middlewares() {
        this.app.use(express.json()); // Habilitar el parseo de JSON
    }

    routes(){

    }

    // Método para iniciar el servidor
    start() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }
}

module.exports = { Server };
