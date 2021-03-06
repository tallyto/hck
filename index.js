console.log("Hello Zart");

const express = require('express')

const app = express();
const player = []
app.use(express.static('public'));
app.get('/', (req, res)=> {
  res.sendFile("index.html")
})

app.get('/cadastro', (req, res)=> {
  const { nome , idade} = req.query
  if(!nome || !idade){
   return res.json({message: "impossivel cadastrar"})
  }
  player.push({nome, idade})
  res.json({message: "cadastro efetuado com sucesso"})
})

app.get('/players', (req, res)=> {
  res.json(player)
})
const PORT = process.env.PORT || 3001
app.listen(PORT, ()=> console.log("servidor em http://localhost:3001"))