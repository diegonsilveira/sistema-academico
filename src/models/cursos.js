'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({       
    curso: {
        type: String,
        required: true,
        trim: true
    },
    disciplinas: [{
        type: String,
        required: true
    }],
    alunos: [{
        type: String,
        required: true
    }]
});

module.exports = mongoose.model('Cursos', schema);