'use strict';

const mongoose = require('mongoose');
const Alunos = mongoose.model('Alunos');

exports.get = (req, res, next) => {
    Alunos.find({}, 'nome curso').then(data=>{
        res.status(200).send(data);
    }).catch(e=>{
        res.status(400).send(e);
    });;
};

exports.post = (req, res, next) => {
    var Alunos = new Alunos(req.body);
    Alunos.save().then(x=>{
        res.status(201).send({ message: 'Aluno salvo!'});
    }).catch(e=>{
        res.status(400).send({ message: 'Falha ao cadastrar Aluno', data: e});
    });
    
};

exports.put = (req, res, next) => {
    Alunos.findByIdAndUpdate(req.params.id, {
        $set: {
            title: req.body.title,
            description: req.body.description
        }
    }).then(x=>{
        res.status(200).send({ message: 'Aluno atualizado!'});
    }).catch(e=>{
        res.status(400).send({ message: 'Falha ao atualizar Alunos', data: e});
    });
};

exports.delete = (req, res, next) => {
    Alunos.findOneAndRemove(req.params.id, {}).then(x=>{
        res.status(200).send({ message: 'Aluno removido!'});
    }).catch(e=>{
        res.status(400).send({ message: 'Falha ao remover Alunos', data: e});
    });
};