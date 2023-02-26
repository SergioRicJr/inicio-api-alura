import {getTodosLivros, getLivroPorId, insereLivro, modificaLivro} from "../servicos/livro.js"

function getLivros(req, res){
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch(error) {
        res.status(500).send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id
        const livro = getLivroPorId(id)
        res.send(livro)
    }  catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        insereLivro(livroNovo)
        res.status(201) //status de criacao com sucesso
        res.send("Livro inserido com sucesso")
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id
        const body = req.body
        modificaLivro(body,id)
        res.send("Livro alterado com sucesso")
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

export {getLivros,getLivro, postLivro, patchLivro}
