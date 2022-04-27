const Veiculo = require("../models/Veiculo");
const Funcionario = require("../models/Funcionario");

module.exports = {
  async index(req, res) {
    const veiculo = await Veiculo.findAll();

    return res.json(veiculo);
  },

  async getOne(req, res) {
    const { id } = req.params;

    const veiculo = await Veiculo.findByPk(id);

    if (!veiculo) {
      return res.status(400).json({ error: "Veículo não encontrado" });
    }

    return res.json(veiculo);
  },

  async store(req, res) {
    const { id } = req.params;
    const { marca, modelo, ano, km, cor, chassi, preco } = req.body;

    const funcionario = await Funcionario.findByPk(id);

    if (!funcionario) {
      return res.status(400).json({ error: "Funcionario não encontrado" });
    }

    const veiculo = await Veiculo.create({
      funcionario_id: id,
      marca,
      modelo,
      ano,
      km,
      cor,
      chassi,
      preco,
    });

    return res.json(veiculo);
  },

  async edit(req, res) {
    const { id } = req.params;
    const { marca, modelo, ano, km, cor, chassi, preco } = req.body;

    const veiculo = await Veiculo.update(
      {
        marca,
        modelo,
        ano,
        km,
        cor,
        chassi,
        preco,
      },
      { where: { id } }
    );

    return res.json(veiculo);
  },

  async delete(req, res) {
    const { id } = req.params;

    const veiculo = await Veiculo.destroy({ where: { id } });

    return res.json();
  },
};
