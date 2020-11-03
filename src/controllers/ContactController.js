const mongoose = require('mongoose');

const Contact = mongoose.model('Contact');

module.exports = {
    async index(req, res) {
        try {
            const contacts = await Contact.find({});
            if (contacts.length == 0) {
                return res.status(204).json({ message : "Sem conteúdo." });
            }

            return res.json(contacts);
        } catch (err) {
            return res.status(400).json({ message : "Ocorreu um erro: "+err.message });
        }
    },

    async show(req, res) {
        try {
            const contact = await Contact.findById(req.params.id);
            if (!contact) {
                return res.status(204).json({ message : "Sem conteúdo." });
            }

            return res.json(contact);
        } catch (err) {
            return res.status(400).json({ message : "Ocorreu um erro: "+err.message });
        }
    },

    async store(req, res) {
        try {
            const contact = await Contact.create(req.body);
            return res.status(201).json(contact);
        } catch (err) {
            return res.status(400).json({ message : "Ocorreu um erro: "+err.message });
        }
    },

    async update(req, res) {
        try {
            const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new : true });
            return res.json(contact);
        } catch (err) {
            return res.status(400).json({ message : "Ocorreu um erro: "+err.message });
        }
    },

    async destroy(req, res) {
        try {
            await Contact.findByIdAndRemove(req.params.id);
            return res.json({ message : "Contato removido com sucesso." });
        } catch (err) {
            return res.status(400).json({ message : "Ocorreu um erro: "+err.message });
        }
    }
}