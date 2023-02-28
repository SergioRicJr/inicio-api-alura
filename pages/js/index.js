import {conectaApi} from "./conectaApi" 

const button = document.querySelector("button")

async function CriandoLivro() {
    const Id = document.querySelector("#id").value
    const Nome = document.querySelector("#nome").value

    await conectaApi.adicLivros(Id, Nome)
}

button.addEventListener("click", CriandoLivro)
