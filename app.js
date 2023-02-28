import express from 'express';
import router from './rotas/livro.js';
import path from "path"

const __dirname = path.resolve()

const app = express() //cria servidor express

const PORT = 3000

app.use(express.static('public'))

// app.use('/', router) necessario usar o router em middleware
app.use(express.json(), router) //express.json() para conseguir receber json no body

app.get("/", (req, res)=>{
    res.send("olá mundo")
})
app.get('/inicio', (req, res)=>{
    res.sendFile(__dirname + "\\public\\pages\\html\\index.html")
})

app.get('/delete', (req,res)=>{
    res.sendFile(__dirname + "\\pages\\html\\deleteLivro.html")
})

// app.get('/deletar', (req, res)=>{
//     res.sendFile(__dirname + "\\pages\\js\\deleteLivro.js")
// })

// app.get('/js',(req, res)=> res.sendFile(__dirname + "\\pages\\js\\index.js"))

// app.get('/conectaApi', (req, res)=> res.sendFile(__dirname + "\\pages\\js\\conectaApi.js"))

app.listen(PORT, ()=>{
    console.log(`servidor escutando em http://localhost:${PORT}`)
})