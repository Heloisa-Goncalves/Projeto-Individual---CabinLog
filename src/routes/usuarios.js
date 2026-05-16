var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/postar", function (req, res) {
    usuarioController.postar(req, res);
})

router.post("/comentar", function (req, res) {
    usuarioController.comentar(req, res);
})

router.post("/curtir", function (req, res) {
    usuarioController.curtir(req, res);
})

router.get("/usuarios/:idUsuario", function (req, res) {
    usuarioController.getUsuario(req, res);
})

module.exports = router;