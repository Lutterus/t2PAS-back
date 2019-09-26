const mongoose = require('mongoose');
const Product = mongoose.model('Aluno');
const TeamProduct = mongoose.model('Time');

exports.postAddPessoa = (req, res, next) => {
    var product = new Product(req.body);
    product.save()
        .then(x => {
            res.status(201).send({ message: 'success' });
        }).catch(e => {
            res.status(400).send({ message: 'fail', data: e });
        });

};

exports.postAddTime = (req, res, next) => {
    var teamproduct = new TeamProduct(req.body);
    teamproduct.save()
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

exports.getTodosTimes = (req, res, next) => {
    TeamProduct.find()
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

