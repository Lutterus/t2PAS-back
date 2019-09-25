const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const subSchema = new Schema({
    nome: {
      type: String,
    },
    curso: {
      type: String,
    }
  });

const schema = new Schema({
    valido: {
        type: Boolean,
        required: true,
        trim: true
    },
    time:[
        subSchema
    ],
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

module.exports = mongoose.model('Time', schema);