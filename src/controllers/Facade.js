const Student = require('./FacadeSystems/Students')
const Teams = require('./FacadeSystems/Teams')
const DecoratorAssociation = require('./FacadeSystems/DecoratorAssociation')

exports.postAddPessoa = (req, res, next) => {
    Student.postAddPessoa(req, res, next);
};

exports.postAddTime = (req, res, next) => {
    Teams.postAddTime(req, res, next);
};


exports.getTodosAlunos = (req, res, next) => {
    Student.getTodosAlunos(req, res, next);
}

exports.getTodosTimes = (req, res, next) => {
    Teams.getTodosTimes(req, res, next);
}

exports.getByNome = (req, res, next) => {
    Student.getByNome(req, res, next);
}

exports.getInscreverse = (req, res, next) => {
    Student.getInscreverse(req, res, next);
};

exports.getDestInscreverse = (req, res, next) => {
    Student.getDestInscreverse(req, res, next);
};

exports.getMyTime = (req, res, next) => {
    Teams.getMyTime(req, res, next);
}

exports.getCleanTime = (req, res, next) => {
    DecoratorAssociation.getCleanTime(req, res, next);
}

exports.postEditTime = (req, res, next) => {
    DecoratorAssociation.postEditTime(req, res, next);
}


exports.getTimesInscritos = (req, res, next) => {
    Teams.getTimesInscritos(req, res, next);
};
exports.getTimeInscrito = (req, res, next) => {
    Teams.getTimeInscrito(req, res, next);
};

exports.postAvaliacao = (req, res, next) => {
    Teams.postAvaliacao(req, res, next);
};

