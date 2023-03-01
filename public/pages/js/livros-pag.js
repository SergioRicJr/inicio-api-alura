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

const btn = document.querySelector("#pesquisar")
const input = document.querySelector("#pesquisa")

async function LivrosFiltrados(pesquisa) {
    const query = await fetch(`http://localhost:3000/2?query=${pesquisa}`)

    const queryConvert = await query.json()

    return queryConvert
}

btn.addEventListener("click", async ()=>{
    var inputValue = input.value
    inputValue = inputValue.trim()

    if (inputValue != '') {
        const livros = await LivrosFiltrados(inputValue)
        console.log(livros)

        // const livrosExistentes = await conectaApi.listaLivros()
        // console.log(livrosExistentes)
        // const livrosExistentes
        // const qtdeLivros = livrosExistentes.length
        const areaLivros = document.querySelectorAll("#area-livros > *") 
        

        for (let x of areaLivros) {
            x.remove()
        }

        for (let i of await livros) {
            var id = i.id
            var titulo = i.nome
            CriaElementos(id, titulo)
        }
    } else {
        const areaLivros = document.querySelectorAll("#area-livros > *") 
    
        for (let x of areaLivros) {
            x.remove()
        }
        InserirElementos()
    }
})

// LivrosFiltrados()