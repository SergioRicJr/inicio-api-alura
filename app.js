import express from 'express';
import router from './rotas/livro.js';

const app = express() //cria servidor express

const PORT = 3000

// app.use('/', router) necessario usar o router em middleware
app.use(express.json(), router) //express.json() para conseguir receber json no body

app.get("/", (req, res)=>{
    res.send("olá mundo")
})



app.listen(PORT, ()=>{
    console.log(`servidor escutando em http://localhost:${PORT}`)
})