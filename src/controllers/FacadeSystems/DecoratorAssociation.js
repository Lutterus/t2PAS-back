const mongoose = require('mongoose');
const Product = mongoose.model('Aluno');
const TeamProduct = mongoose.model('Time');

exports.getCleanTime = (req, res, next) => {
    TeamProduct.findOne({
        time: { $elemMatch: { nome: req.params.nome } }
    }).then(result => {
        result.time.forEach(element => {
            Product.findOneAndUpdate({ nome: element.nome }, { $set: { estaEmTime: false } }, { new: true }, (err, doc) => {
                if (err) {
        
                    res.status(400).send({ message: 'fail', data: e });
                }
            })
        });
        res.status(200).send({ message: 'success' });
    }).catch(err =>{
        res.status(400).send({ message: 'fail', data: e });
    });
}

exports.postEditTime = (req, res, next) => {
    var valid = false
    var cc = false
    var es = false
    req.body.time.forEach(element => {
        if (element.curso === "Engenharia de Software") {
            es = true
        } else if (element.curso === "Ciência da Computação") {
            cc = true
        }
    });

    if (cc === true && es === true) {
        valid = true

    } else {
        valid = false
    }
    TeamProduct.findOneAndUpdate({
        time: { $elemMatch: { nome: req.params.nome } }
    },
        { $set: { time: req.body.time, valido: valid } },
        { upsert: true },
        (err, doc) => {
            if (err) {
                res.status(400).send({ message: 'fail', data: err });
            }
            //atualizar que o aluno esta em um time
            req.body.time.forEach(element => {
                Product.findOneAndUpdate(
                    { nome: element.nome },
                    { $set: { estaEmTime: true } }, { new: true }, (err, doc) => {
                        if (err) {

                            res.status(400).send({ message: 'fail', data: e });
                        }
                    })
            });
            res.status(200).send({ data: 'success' })
        })

}