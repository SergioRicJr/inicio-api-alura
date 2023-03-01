import fs from 'fs'

function getTodosLivros() {
    return JSON.parse( fs.readFileSync("livros.json"))
}

function getLivroPorId(id) {
    const livros = getTodosLivros()
    //filter recebe funcao como parametro para fazer filtragem de lista
    // retorna uma lista
    const livroFiltrado = livros.filter( livro=> livro.id == id)[0] //funciona pq o id é unico, mas filter retorna todos q atendem a condição
    
    return livroFiltrado
}

function insereLivro(livroNovo) {
    const livros = getTodosLivros()

    let novaListaDeLivros = [...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = getTodosLivros()
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id == id)

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }
    // ex: cada chave q houver no modificacoes que ja existir vao ser alteradas no livrosAtuais
    // vai pegar as chaves que ja existes e modificar pelo segundo item passado ou criar caso n exista
    livrosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function removeLivro(id) {
    const livros = getTodosLivros()
    const indice = livros.findIndex(livro => livro.id == id)
    livros.splice(indice, 1)
    fs.writeFileSync("livros.json",JSON.stringify(livros))
}

function retornaLivrosFiltrados(query) { //implementar regex depois
    const livros = getTodosLivros()
    
    var expressao = new RegExp(query, "i")

    const livrosFiltrados = livros.filter(livro => expressao.test(livro.id)|| expressao.test(livro.nome))

    return livrosFiltrados
}

export {getTodosLivros, getLivroPorId, insereLivro, modificaLivro, removeLivro, retornaLivrosFiltrados}

