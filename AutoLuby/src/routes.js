const routes = require("express").Router();

const FuncionarioController = require("./controllers/FuncionariosController");
const LoginController = require("./controllers/LoginController");
const VeiculosController = require("./controllers/VeiculosController");

const auth = require("./middlewares/authMiddleware");

routes.get("/funcionarios",auth, FuncionarioController.index);
routes.get("/funcionarios/:id",auth, FuncionarioController.getOne);
routes.post("/funcionarios", FuncionarioController.store);
routes.post("/funcionarios/:id",auth, FuncionarioController.edit);
routes.delete("/funcionarios/:id",auth, FuncionarioController.delete);

routes.post("/login", LoginController.login);

routes.get("/veiculos",auth, VeiculosController.index);
routes.get("/veiculos/:id",auth, VeiculosController.getOne);
routes.post("/veiculos/:id",auth, VeiculosController.store);
routes.post("/veiculos/edit/:id",auth, VeiculosController.edit);
routes.delete("/veiculos/:id",auth, VeiculosController.delete);

module.exports = routes;
