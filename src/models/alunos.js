'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({       
    nome: {
        type: String,
        required: true,
        trim: true
    },
    curso: {
        type: String
    },
    notas: [{
        type: Number,
        required: true
    }],
    faltas: {
        type: Number
    }
});

module.exports = mongoose.model('Alunos', schema);