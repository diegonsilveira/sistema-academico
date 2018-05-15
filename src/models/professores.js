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
    disciplinas: [{
        type: String,
        required: true
    }]
});

module.exports = mongoose.model('Professores', schema);