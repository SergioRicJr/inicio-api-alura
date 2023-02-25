// livro.js
import { Router } from "express"
import {getLivros, getLivro} from "../controladores/livro.js"

const router = Router()

router
    .get('/livros', getLivros)

    .get('/:id', getLivro)

    .post('/', (req, res) => {
    res.send('Você fez uma requisição do tipo POST')
})

    .patch('/', (req, res) => {
    res.send('Você fez uma requisição do tipo PATCH')
})

    .delete('/', (req, res) => {
    res.send('Você fez uma requisição do tipo DELETE')
})

export default router