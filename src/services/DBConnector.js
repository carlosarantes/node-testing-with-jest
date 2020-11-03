const mongoose = require('mongoose');
const requireDir = require('require-dir');

module.exports = class DBConnector {
    constructor(){
    }

    async openConnection() {
        console.log('AAAAA')
        mongoose.connect(process.env.MONDODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        requireDir('../models');
        this.activateListenners();
    }

    async closeConnection() {
        await mongoose.disconnect();
    }

    activateListenners() {
        mongoose.connection.on('error', err => {
            console.log(err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log("Banco de dados disconectado");
        });

        mongoose.connection.on('connected', () => {
            console.log("Banco de dados conectado");
        });          
    }
}