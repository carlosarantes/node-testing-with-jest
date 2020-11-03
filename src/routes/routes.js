const express = require('express');
const routes  = express.Router();

const ContactController = require('../controllers/ContactController');

routes.get('/contatos', ContactController.index);
routes.get('/contatos/:id', ContactController.show);
routes.post('/contatos', ContactController.store);
routes.put('/contatos/:id', ContactController.update);
routes.delete('/contatos/:id', ContactController.destroy);

module.exports = routes;