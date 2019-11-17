const mongoose = require('mongoose');
const TeamProduct = mongoose.model('Time');

exports.postAddTime = (req, res, next) => {
    var teamproduct = new TeamProduct(req.body);
    teamproduct.save()
        .then(x => {
            res.status(201).send({ message: 'success' });
        }).catch(e => {
            res.status(400).send({ message: 'fail', data: e });
        });

};

exports.getTodosTimes = (req, res, next) => {
    TeamProduct.find()
        .then(data => {
            res.status(200).send({ data });
        }).catch(e => {
            res.status(400).send({ message: 'fail', data: e });
        });
}

exports.getMyTime = (req, res, next) => {
    TeamProduct.find({
        time: { $elemMatch: { nome: req.params.nome } }
    })
        .then(data => {
            res.status(200).send({ data });
        }).catch(e => {
            res.status(400).send({ message: 'fail', data: e });
        });
}

exports.getTimesInscritos = (req, res, next) => {
    TeamProduct.find({
        valido: true
    })
        .then(data => {
            res.status(200).send({ data });
        }).catch(e => {
            res.status(400).send({ message: 'fail', data: e });
        });
};

exports.getTimeInscrito = (req, res, next) => {
    TeamProduct.find({
        time: { $elemMatch: { nome: req.params.nome } }
    }, 'softwareFuncionando processo pitch inovacao formacaoDoTime',
    )
        .then(data => {
            res.status(200).send({ data });
        }).catch(e => {
            res.status(400).send({ message: 'fail', data: e });
        });
};

exports.postAvaliacao = (req, res, next) => {
    TeamProduct.findOneAndUpdate({
        time: { $elemMatch: { nome: req.params.nome } }
    },
        { $set: { 
            softwareFuncionando: req.body.softwareFuncionando, 
            processo: req.body.processo,
            pitch: req.body.pitch,
            inovacao: req.body.inovacao,
            formacaoDoTime: req.body.formacaoDoTime
         }},
        { upsert: true },
        (err, doc) => {
            if (err) {
                res.status(400).send({ message: 'fail', data: err });
            }
            res.status(200).send({ data: 'success' })
        })
};