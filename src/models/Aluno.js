const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    curso: {
        type: String,
        required: true,
        trim: true
    },
    tipo: {
        type: String,
        required: true,
        trim: true
    },
    inscrito: {
        type: Boolean,
        required: true,
        trim: true
    },
    estaEmTime: {
        type: Boolean,
        required: true,
        trim: true
    },

});

module.exports = mongoose.model('Aluno', schema);