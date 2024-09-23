import express from "express";
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get("/", function (req, res) {
    res.render("index");
  });

app.get("/clientes", function (req, res) {
  const clientes = [
    {
      nome: "Gabriel Pereira",
      cpf: "111.222.333-44",
      endereco: "Rua do Sol, 12, Bairro Porto Seguro, Cidade Mar Azul, Estado do Horizonte, CEP: 11223-445",
    },
    {
      nome: "Clara Mendes",
      cpf: "555.666.777-88",
      endereco: "Avenida das Águas, 78, Bairro Vila do Lago, Cidade Brisa Suave, Estado das Ondas, CEP: 22334-556",
    },
    {
      nome: "Lucas Freitas",
      cpf: "999.888.777-66",
      endereco: "Travessa do Vento, 45, Bairro Alto do Céu, Cidade Estrela do Mar, Estado do Luar, CEP: 33445-667",
    },
    {
      nome: "Juliana Costa",
      cpf: "444.333.222-11",
      endereco: "Praça dos Girassóis, 101, Bairro Flores do Campo, Cidade Horizonte Verde, Estado da Floresta, CEP: 44556-778",
    },
  ];
  res.render("clientes", {
    clientes: clientes,
  });
});
  

app.get("/pedidos", function (req, res) {
  const pedidos = [
    { numero: "673821001", valor: 2450 },
    { numero: "673821002", valor: 850 },
    { numero: "673821003", valor: 4000 },
    { numero: "673821004", valor: 270 },
  ];
  res.render("pedidos", {
    pedidos: pedidos,
  });
});

app.get("/produtos", function (req, res) {
  const produtos = [
    { nome: "Smartphone Xiaomi Redmi Note 11", preco: 1500, categoria: "Eletrônicos" },
    { nome: "Smart TV LG 55' 4K", preco: 3200, categoria: "Eletrodomésticos" },
    { nome: "Console PlayStation 5", preco: 4500, categoria: "Jogos" },
    { nome: "Câmera GoPro Hero 10", preco: 1800, categoria: "Câmeras" },
  ];
  res.render("produtos", {
    produtos: produtos,
  });
});

app.listen(8080, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
