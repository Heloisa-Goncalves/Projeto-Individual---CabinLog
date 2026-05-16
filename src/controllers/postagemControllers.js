var postagemModel = require("../models/postagemModel");

function getDadosPostagem(req, res){
    postagemModel.getDadosPostagem()   
    .then(function (resultado){
                res.status(200).json(resultado);
        })  
}

function getDadosComentarios(req, res){
    var idPostagem = req.params.idPostagem;
    postagemModel.getDadosComentarios(idPostagem)   
    .then(function (resultado){
                res.status(200).json(resultado);
        })  
}

function getDadosCurtidas(req, res){
    var idPostagem = req.params.idPostagem;
    postagemModel.getDadosCurtidas(idPostagem)   
    .then(function (resultado){
                res.status(200).json(resultado);
        })  
}


module.exports = {
    getDadosPostagem,
    getDadosComentarios,
    getDadosCurtidas
}

