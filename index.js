import express from "express";
const app = express();
import connection from "./config/sequelize-config.js";
import ClientesController from "./controllers/ClientesController.js";
import ProdutosController from "./controllers/ProdutosController.js";
import PedidosController from "./controllers/PedidosController.js";
import UsersController from "./controllers/UsersController.js";
import session from "express-session";
import Auth from "./middleware/Auth.js";
import flash from "express-flash";

app.use(flash());

app.use(session({
  secret: "secret",
  cookie:{maxAge: 3600000},
  saveUnitialized: false,
  resave: false
}));

app.use(express.urlencoded({extend: false}));

connection
  .authenticate().then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!");
  })
  .catch((error) => {
    console.log(error);
  });

connection.query(`create database if not exists Excellenty;`).then(() => {
    console.log("O banco de dados está criado.");
}).catch((error) => {
    console.log(error);
})

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", ClientesController);
app.use("/", ProdutosController);
app.use("/", PedidosController);
app.use("/", UsersController);

app.get("/", Auth, function (req, res) {
  res.render("index", {
    messages: req.flash()
  });
});

const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Erro ao iniciar o servidor: ${error}.`);
  } else {
    console.log(`Servidor rodando em http://localhost:${port}`);
  }
});
