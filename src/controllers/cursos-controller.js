'use strict';

const mongoose = require('mongoose');
const Cursos = mongoose.model('Cursos');

exports.get = (req, res, next) => {
    Cursos.find({}, 'curso disciplina alunos').then(data=>{
        res.status(200).send(data);
    }).catch(e=>{
        res.status(400).send(e);
    });;
};

exports.post = (req, res, next) => {
    var curso = new Cursos(req.body);
    curso.save().then(x=>{
        res.status(201).send({ message: 'Curso salvo!'});
    }).catch(e=>{
        res.status(400).send({ message: 'Falha ao cadastrar curso', data: e});
    });
    
};

exports.put = (req, res, next) => {
    Cursos.findByIdAndUpdate(req.params.id, {
        $set: {
            title: req.body.title,
            description: req.body.description
        }
    }).then(x=>{
        res.status(200).send({ message: 'Cursos atualizado!'});
    }).catch(e=>{
        res.status(400).send({ message: 'Falha ao atualizar curso', data: e});
    });
};

exports.delete = (req, res, next) => {
    Cursos.findOneAndRemove(req.params.id, {}).then(x=>{
        res.status(200).send({ message: 'Cursos removido!'});
    }).catch(e=>{
        res.status(400).send({ message: 'Falha ao remover curso', data: e});
    });
};