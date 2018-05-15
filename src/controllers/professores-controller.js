'use strict';

const mongoose = require('mongoose');
const Professores = mongoose.model('Professores');

exports.get = (req, res, next) => {
    Professores.find({}, 'nome curso').then(data=>{
        res.status(200).send(data);
    }).catch(e=>{
        res.status(400).send(e);
    });;
};

exports.post = (req, res, next) => {
    var noticia = new Professores(req.body);
    noticia.save().then(x=>{
        res.status(201).send({ message: 'Professor salvo!'});
    }).catch(e=>{
        res.status(400).send({ message: 'Falha ao cadastrar professor', data: e});
    });
    
};

exports.put = (req, res, next) => {
    Professores.findByIdAndUpdate(req.params.id, {
        $set: {
            title: req.body.title,
            description: req.body.description
        }
    }).then(x=>{
        res.status(200).send({ message: 'Professor atualizado!'});
    }).catch(e=>{
        res.status(400).send({ message: 'Falha ao atualizar Professor', data: e});
    });
};

exports.delete = (req, res, next) => {
    Professores.findOneAndRemove(req.params.id, {}).then(x=>{
        res.status(200).send({ message: 'Professor removida!'});
    }).catch(e=>{
        res.status(400).send({ message: 'Falha ao remover Professor', data: e});
    });
};