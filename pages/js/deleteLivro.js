import { conectaApi } from "./conectaApi";

const btn = document.querySelector("button")
const input = document.querySelector("#id")

async function deletando() {
    var numeroLivro = input.value

    await conectaApi.deletarLivro(numeroLivro)
}

btn.addEventListener("click", deletando)