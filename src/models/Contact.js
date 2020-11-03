const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
const ContactSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    age: Number
});

mongoose.model('Contact', ContactSchema);
