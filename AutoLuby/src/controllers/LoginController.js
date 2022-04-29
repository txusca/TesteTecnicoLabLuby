const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const Funcionario = require("../models/Funcionario");

function generateToken(params = {}) {
  return jwt.sign(params, "Rrw$p58BzgC^", {
      expiresIn: 300,
  });
}

module.exports = {
  async login(req, res) {
    const { email, senha } = req.body;
    console.log(email, senha);

    const funcionario = await Funcionario.findOne({ where: { email } });
    if (!funcionario) {
      return res.status(400).json({ error: "Email não encontrado" });
    }

    if (!await bcrypt.compare(senha, funcionario.senha)) {
      return res.status(400).json({ error: "Senha incorreta" });
    }

    return res.status(200).json({
      auth: true, token: generateToken({ id: funcionario.id })
    });
  }
}