import {conectaApi} from "./conectaApi" //dificuldade para importar 
// async function adicLivros(Id, Nome){
//     const conect = await fetch("http://localhost:3000/livros", {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify({
//             id: Id,
//             nome: Nome
//         })
//     })
    
//     const conectConvert = await conect.json()
    
//     return conectConvert
// }
const button = document.querySelector("button")

async function CriandoLivro() {
    const Id = document.querySelector("#id").value
    const Nome = document.querySelector("#nome").value

    await conectaApi.adicLivros(Id, Nome)
}

button.addEventListener("click", CriandoLivro)
