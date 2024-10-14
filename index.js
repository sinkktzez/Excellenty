import express from "express";
const app = express();
import connection from "./config/sequelize-config.js";
import ClientesController from "./controllers/ClientesController.js";
import ProdutosController from "./controllers/ProdutosController.js";
import PedidosController from "./controllers/PedidosController.js";

app.use(express.urlencoded({extend: false}));

connection
  .authenticate().then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!");
  })
  .catch((error) => {
    console.log(error);
  });

connection.query(`create database if not exists loja;`).then(() => {
    console.log("O banco de dados está criado.");
}).catch((error) => {
    console.log(error);
})

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", ClientesController);
app.use("/", ProdutosController);
app.use("/", PedidosController);

app.get("/", function (req, res) {
  res.render("index");
});

const port = 3000;
app.listen(port, (error) => {
  if (error) {
    console.log(`Erro ao iniciar o servidor: ${error}.`);
  } else {
    console.log(`Servidor rodando em http://localhost:${port}`);
  }
});
