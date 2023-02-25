import express from 'express';
import router from './rotas/livro.js';

const app = express() //cria servidor express

const PORT = 3000

app.use('/', router)
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("olá mundo")
})

app.listen(PORT, ()=>{
    console.log(`servidor escutando em http://localhost:${PORT}`)
})