var database = require("../database/config")

function getDadosPostagem(){
var instrucaoSql = ` 
SELECT * FROM postagem;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function getDadosComentarios(idPostagem){
    var instrucaoSql = `
    
    SELECT u.nomeUser,  c.mensagem FROM comentario c 
    JOIN usuario u ON c.idUsuario = u.idUsuario 
    JOIN postagem p ON c.idPostagem = p.idPostagem 
    WHERE p.idPostagem = ${idPostagem};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function getDadosCurtidas(idPostagem){
var instrucaoSql = `SELECT count(*) AS curtidas FROM curtida WHERE idPostagem = ${idPostagem};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    getDadosPostagem,
    getDadosComentarios,
    getDadosCurtidas
};