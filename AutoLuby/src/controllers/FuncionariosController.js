const Funcionario = require("../models/Funcionario");

module.exports = {
  async index(req, res) {
    const funcionarios = await Funcionario.findAll();

    return res.json(funcionarios);
  },

  async getOne(req, res) {
    const { id } = req.params;

    const funcionario = await Funcionario.findByPk(id);

    if (!funcionario) {
      return res.status(400).json({ error: "Funcionario não encontrado" });
    }

    return res.json(funcionario);
  },

  async store(req, res) {
    const { nome, cpf, email, senha, bibliografia, avatar } = req.body;

    const funcionario = await Funcionario.create({
      nome,
      cpf,
      email,
      senha,
      bibliografia,
      avatar,
    });

    return res.json(funcionario);
  },

  async edit(req, res) {
    const { id } = req.params;
    const { nome, cpf, email, senha, bibliografia, avatar } = req.body;

    const funcionario = await Funcionario.update(
      {
        nome,
        cpf,
        email,
        senha,
        bibliografia,
        avatar,
      },
      { where: { id } }
    );

    return res.json(funcionario);
  },

  async delete(req, res) {
    const { id } = req.params;

    const funcionario = await Funcionario.destroy({ where: { id } });

    return res.json();
  },
};
