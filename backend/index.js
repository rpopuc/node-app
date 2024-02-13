const express = require('express')
const app = express()
const port = 8080

const boardgameData = [
  {
      id: 1,
      name: "Catan",
      description: "Jogo de tabuleiro criado por Klaus Teuber em 1995.",
      price: 100
  },
  {
      id: 2,
      name: "Carcassonne",
      description: "Jogo de tabuleiro criado por Klaus-Jürgen Wrede em 2000.",
      price: 150
  },
  {
      id: 3,
      name: "Ticket to Ride",
      description: "Jogo de tabuleiro criado por Alan R. Moon em 2004.",
      price: 200
  }
]

app.get('/', (req, res) => {
  res.send('Olá mundo!')
})

app.get('/boardgames', (req, res) => {
  res.send({
    ok: true,
    data: boardgameData
  })
})

app.get('/boardgames/:id', async (req, res) => {
  const id = req.params.id
  const boardgame = boardgameData.find(boardgame => boardgame.id == id)

  await new Promise(resolve => setTimeout(resolve, 2000))

  res.send({
    ok: true,
    data: boardgame
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})