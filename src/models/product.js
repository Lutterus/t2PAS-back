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
    time:[{
        type: String
    }],
    softwareFuncionando: {
        type: Number
    },
    processo: {
        type: Number
    },
    pitch: {
        type: Number
    },
    inovacao: {
        type: Number
    },
    formacaoDoTime:{
        type: Number
    }

});

module.exports = mongoose.model('Product', schema);