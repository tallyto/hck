console.log("Hello Zart");

const express = require('express')

const app = express();
const player = []

app.get('/', (req, res)=> {
  res.send("<h1>HACKERS ORG</h1>")
})

app.get('/cadastro', (req, res)=> {
  const { nome , idade} = req.query
  if(!nome || !idade){
    res.json({message: "impossivel cadastrar"})
  }
  player.push({nome, idade})
  res.json({message: "cadastro efetuado com sucesso"})
})

app.get('/players', (req, res)=> {
  res.json(player)
})

app.listen(3001, ()=> console.log("servidor em http://localhost:3001"))