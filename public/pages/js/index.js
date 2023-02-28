import {conectaApi} from "./conectaApi.js" 

const button = document.querySelector("button")

async function CriandoLivro() {
    const Id = document.querySelector("#id").value
    const Nome = document.querySelector("#nome").value

    await conectaApi.adicLivros(Id, Nome)
}

button.addEventListener("click", CriandoLivro)


//tirar html do estatic e deixar so os arquivos de link