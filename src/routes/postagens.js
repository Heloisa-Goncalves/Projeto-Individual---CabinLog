var express = require("express");
var router = express.Router();

var postagemController = require("../controllers/postagemControllers");

router.get("/getDadosPostagem", function (req, res) {
    postagemController.getDadosPostagem(req, res);
})

router.get("/getDadosComentarios/:idPostagem", function (req, res) {
    postagemController.getDadosComentarios(req, res);
})

router.get("/getDadosCurtidas/:idPostagem", function (req, res) {
    postagemController.getDadosCurtidas(req, res);
})

module.exports = router;