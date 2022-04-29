const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

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
    this.addHook('beforeSave', async funcionario => {
      if (funcionario.senha) {
        funcionario.senha = await bcrypt.hash(funcionario.senha, 8);
      }
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Veiculo, {
      foreignKey: "funcionario_id",
      as: "veiculos",
    });
  }


}

module.exports = Funcionario;
