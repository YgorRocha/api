const config = require("../../../knexfile");

//Importando o knex
const knex = require("knex");

//Agora você vai criar a conexão, vou dizer que minha conexão é knex
// e as configurções ser de desenvolvemento
const connection = knex(config.development);

//exportando para poder usar em outros lugares
module.exports = connection;