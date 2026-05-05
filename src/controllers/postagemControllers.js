var postagemModel = require("../models/postagemModel");

function getDadosPostagem(req, res){
postagemModel.getDadosPostagem()   
.then(function (resultado){
            res.status(200).json(resultado);
        })
}

module.exports = {
    getDadosPostagem
}

