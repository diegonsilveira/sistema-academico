'use strict';

const mongoose = require('mongoose');
const Noticias = mongoose.model('Noticias');

exports.get = (req, res, next) => {
    Noticias.find({}, 'title description').then(data=>{
        res.status(200).send(data);
    }).catch(e=>{
        res.status(400).send(e);
    });;
};

exports.post = (req, res, next) => {
    var noticia = new Noticias(req.body);
    noticia.save().then(x=>{
        res.status(201).send({ message: 'Noticia salva!'});
    }).catch(e=>{
        res.status(400).send({ message: 'Falha ao cadastrar noticia', data: e});
    });
    
};

exports.put = (req, res, next) => {
    Noticias.findByIdAndUpdate(req.params.id, {
        $set: {
            title: req.body.title,
            description: req.body.description
        }
    }).then(x=>{
        res.status(200).send({ message: 'Noticia atualizado!'});
    }).catch(e=>{
        res.status(400).send({ message: 'Falha ao atualizar noticia', data: e});
    });
};

exports.delete = (req, res, next) => {
    Noticias.findOneAndRemove(req.params.id, {}).then(x=>{
        res.status(200).send({ message: 'Noticia removida!'});
    }).catch(e=>{
        res.status(400).send({ message: 'Falha ao remover noticia', data: e});
    });
};