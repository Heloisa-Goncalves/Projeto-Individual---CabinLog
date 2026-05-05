var database = require("../database/config")

function getDadosPostagem(){
var instrucaoSql = ` 
SELECT * FROM postagem;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    getDadosPostagem
};