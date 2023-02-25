import getTodosLivros from "../servicos/livro.js"

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
    }  catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

export {getLivros,getLivro}
