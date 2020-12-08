const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Olá mundo")
})

app.get("/sobre", (req, res) => {
  res.send("Página SOBRE")
})

app.get("/produtos", (req, res) => {
    res.send("Página Produtos")
  })

app.listen(3000, () => console.log("Servidor escutando na porta 3000"))
