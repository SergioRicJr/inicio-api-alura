import fs from 'fs'

function getTodosLivros() {
    return JSON.parse( fs.readFileSync("livros.json"))
}

function getLivroPorId() {
    const livros = getTodosLivros()
    //filter recebe funcao como parametro para fazer filtragem de lista
    // retorna uma lista
    const livroFiltrado = livros.filter( livro=> livro.id == id) //funciona pq o id é unico, mas filter retorna todos q atendem a condição
    return livroFiltrado[0]
}

export {getTodosLivros, getLivroPorId}