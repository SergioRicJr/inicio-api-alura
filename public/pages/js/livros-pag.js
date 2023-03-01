import {conectaApi} from './conectaApi.js'

function CriaElementos(id, titulo) {
    const areaLivros = document.querySelector("#area-livros")
    var areaLivro = document.createElement("div")
    areaLivro.classList.add('Livro')

    var cardLivro = document.createElement("div")
    cardLivro.classList.add('card-livro')
    var idLivro = document.createTextNode(id)
    cardLivro.appendChild(idLivro)
    areaLivro.appendChild(cardLivro)
    
    var tituloLivro = document.createElement("h2")
    var texto = document.createTextNode(titulo)
    tituloLivro.appendChild(texto)
    areaLivro.appendChild(tituloLivro)
    areaLivros.appendChild(areaLivro)
}

async function InserirElementos() {
    const livrea = await conectaApi.listaLivros()

    for (let i of await livrea) {
        var id = i.id
        var titulo = i.nome
        CriaElementos(id, titulo)
    }
}

InserirElementos()