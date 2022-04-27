const { Model, DataTypes } = require("sequelize");

class Funcionario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        cpf: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
        bibliografia: DataTypes.STRING,
        avatar: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Veiculo, {
      foreignKey: "funcionario_id",
      as: "veiculos",
    });
  }
}

module.exports = Funcionario;
