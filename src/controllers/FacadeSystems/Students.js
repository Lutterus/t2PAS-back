const mongoose = require('mongoose');
const Product = mongoose.model('Aluno');

exports.postAddPessoa = (req, res, next) => {
    var product = new Product(req.body);
    product.save()
        .then(x => {
            res.status(201).send({ message: 'success' });
        }).catch(e => {
            res.status(400).send({ message: 'fail', data: e });
        });

};

exports.getTodosAlunos = (req, res, next) => {
    Product.find({
        tipo: "Aluno"
    })
        .then(data => {
            res.status(200).send({ data });
        }).catch(e => {
            res.status(400).send({ message: 'fail', data: e });
        });
}

exports.getByNome = (req, res, next) => {
    Product.find({
        nome: req.params.nome
    })
        .then(data => {
            res.status(200).send({ data });
        }).catch(e => {
            res.status(400).send({ message: 'fail', data: e });
        });
}

exports.getInscreverse = (req, res, next) => {
    const nome = req.params.nome;
    Product.findOneAndUpdate({ nome: nome }, { $set: { inscrito: true } }, { new: true }, (err, doc) => {
        if (err) {

            res.status(400).send({ message: 'fail', data: e });
        }

        res.status(200).send({ message: 'success' });
    })
};

exports.getDestInscreverse = (req, res, next) => {
    const nome = req.params.nome;
    Product.findOneAndUpdate({ nome: nome }, { $set: { inscrito: false } }, { new: true }, (err, doc) => {
        if (err) {

            res.status(400).send({ message: 'fail', data: e });
        }

        res.status(200).send({ message: 'success' });
    })
};