const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const connector = new (require('../services/DBConnector'))();

const App = class App {
    constructor(){
        connector.openConnection();
    }

    getApp(){
        return this.app;
    }

    init(listen = true) {
        this.app = express();
        this.app.use(express.json());
        this.app.use(bodyParser.json())
        this.app.use(cors());
        this.app.use('/api/v1', require('../routes/routes'));
        this.activateListenners();

        if (listen) {
            this.listen();
        }
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('Listening to port 3333');
        });
    }


    activateListenners() {
        process.on('uncaughtException', (err, origin) => {
            console.log('uncaughtException ', err);
        });

        process.on('error', (err, origin) => {
            console.log('error ', err);
        });
    }
}

module.exports = new App();