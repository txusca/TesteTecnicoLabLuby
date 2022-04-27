const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token)
    return res
      .status(401)
      .json({
        auth: false,
        message: "Você precisa providenciar uma chave de acesso.",
      });

  jwt.verify(token, "Rrw$p58BzgC^", function (err, decoded) {
    if (err) return res.status(500).json({ auth: false, message: 'Falha ao autenticar.' });

    req.id = decoded.id;
    next();
  });
};
