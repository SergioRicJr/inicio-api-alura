// livro.js
import { Router } from "express"
import {getLivros, getLivro, postLivro, patchLivro, deleteLivro, filtraLivro} from "../controladores/livro.js"

const router = Router()

router
    .get("/2", filtraLivro)

    .get('/livros', getLivros)

    .get('/livros/:id', getLivro)

    .post('/livros', postLivro)

    .patch('/livros/:id', patchLivro) // edicap é com metodo patch

    .delete('/livros/:id', deleteLivro)

export default router