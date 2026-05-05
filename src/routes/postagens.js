var express = require("express");
var router = express.Router();

var postagemController = require("../controllers/postagemControllers");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/getDadosPostagem", function (req, res) {
    postagemController.getDadosPostagem(req, res);
})

module.exports = router;