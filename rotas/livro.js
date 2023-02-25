// livro.js
import { Router } from "express"
import getLivros from "../controladores/livro.js"

const router = Router()

router.get('/livros', getLivros)

router.post('/', (req, res) => {
    res.send('Você fez uma requisição do tipo POST')
})

router.patch('/', (req, res) => {
    res.send('Você fez uma requisição do tipo PATCH')
})

router.delete('/', (req, res) => {
    res.send('Você fez uma requisição do tipo DELETE')
})

export default router