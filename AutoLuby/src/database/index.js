const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Funcionario = require('../models/Funcionario');
const Veiculo = require('../models/Veiculo');

const connection = new Sequelize(dbConfig);

Funcionario.init(connection);
Veiculo.init(connection);

Funcionario.associate(connection.models);
Veiculo.associate(connection.models);

module.exports = connection;