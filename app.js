const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/listagem', (req, res) => {
  res.sendFile(__dirname + '/views/listagem.html');
});

app.get('/formulario', (req, res) => {
  res.sendFile(__dirname + '/views/formulario.html');
});

app.post('/carro', (req, res) => {
  const { modelo, marca, ano, cor, kilometragem, valor } = req.body;

  console.log("Modelo do carro: " + modelo);
  console.log("Marca do carro: " + marca);
  console.log("Ano do carro: " + ano);
  console.log("Cor do carro: " + cor);
  console.log("Kilometragem do carro: " + kilometragem);
  console.log("Valor do carro: " + valor);

  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
