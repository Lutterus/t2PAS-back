const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.post = (req, res, next) => {
    //var product = new Product();
    //product.title = req.body.title; especificando cada para validar valor
    var product = new Product(req.body);
    product.save()
    .then(x => {
        res.status(201).send({ message: 'success'});
    }).catch(e => {
        res.status(400).send({ message: 'fail', data: e});
    });
    
};

exports.getTodosAlunos = (req, res, next) => {
    Product.find({
        tipo: "Aluno"
    })
    .then(data => {
        res.status(200).send({data});
    }).catch(e => {
        res.status(400).send({ message: 'fail', data: e});
    });
}

exports.getByNome = (req, res, next) => {
    Product.find({
        nome: req.params.nome
    })
    .then(data => {
        res.status(200).send({data});
    }).catch(e => {
        res.status(400).send({ message: 'fail', data: e});
    });
}

exports.getInscreverse = (req, res, next) => {
    const nome = req.params.nome;
    Product.findOneAndUpdate({nome:nome}, {$set:{inscrito: true}}, {new: true}, (err, doc) => {
        if (err) {
            
            res.status(400).send({ message: 'fail', data: e});
        }
        
        res.status(200).send({ message: 'success'});
    })
};

exports.getDestInscreverse = (req, res, next) => {
    const nome = req.params.nome;
    Product.findOneAndUpdate({nome:nome}, {$set:{inscrito: false}}, {new: true}, (err, doc) => {
        if (err) {
            
            res.status(400).send({ message: 'fail', data: e});
        }
        
        res.status(200).send({ message: 'success'});
    })
};

exports.getTime = (req, res, next) => {
    Product.find({
        nome: req.params.nome
    })
    .then(data => {
        res.status(200).send({data});
    }).catch(e => {
        res.status(400).send({ message: 'fail', data: e});
    });
}


exports.postTime = (req, res, next) => {
    const nome = req.params.nome;
    const time = req.body.time;

    Product.findOneAndUpdate({nome:nome}, {$set:{time: time}}, {new: true}, (err, doc) => {
        if (err) {
            res.status(400).send({ message: 'fail', data: err});
        }
        res.status(200).send({ message: 'success'});
    })
};

exports.getInscritos = (req, res, next) => {
    Product.find({
        inscrito: true
    })
    .then(data => {
        res.status(200).send({data});
    }).catch(e => {
        res.status(400).send({ message: 'fail', data: e});
    });
};
exports.getInscrito = (req, res, next) => {
    Product.find({
        nome: req.params.nome
    }, 'softwareFuncionando processo pitch inovacao formacaoDoTime',
    )
    .then(data => {
        res.status(200).send({data});
    }).catch(e => {
        res.status(400).send({ message: 'fail', data: e});
    });
};

exports.postAvaliacao = (req, res, next) => {
    const nome = req.params.nome;
    Product.findOneAndUpdate({nome:nome}, {$set:{
        softwareFuncionando: req.body.softwareFuncionando,
        processo:  req.body.processo,
        pitch:  req.body.pitch,
        inovacao:  req.body.inovacao,
        formacaoDoTime:  req.body.formacaoDoTime
    }}, {new: true}, (err, doc) => {
        if (err) {
            res.status(400).send({ message: 'fail', data: err});
        }
        res.status(200).send({ message: 'success'});
    })
};


