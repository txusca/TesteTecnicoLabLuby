const { Model, DataTypes } = require("sequelize");

class Veiculo extends Model {
  static init(sequelize) {
    super.init(
      {
        marca: DataTypes.STRING,
        modelo: DataTypes.STRING,
        ano: DataTypes.INTEGER,
        km: DataTypes.INTEGER,
        cor: DataTypes.STRING,
        chassi: DataTypes.STRING,
        preco: DataTypes.FLOAT,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Funcionario, {
      foreignKey: "funcionario_id",
      as: "funcionario",
    });
  }
}

module.exports = Veiculo;
