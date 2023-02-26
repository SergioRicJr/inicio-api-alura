// livro.js
import { Router } from "express"
import {getLivros, getLivro, postLivro, patchLivro} from "../controladores/livro.js"

const router = Router()

router
    .get('/livros', getLivros)

    .get('/livros/:id', getLivro)

    .post('/livros', postLivro)

    .patch('/livros/:id', patchLivro) // edicap é com metodo patch

    .delete('/', (req, res) => {
    res.send('Você fez uma requisição do tipo DELETE')
})

export default router