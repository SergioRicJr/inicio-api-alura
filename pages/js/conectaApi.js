
async function adicLivros(Id, Nome){
    const conect = await fetch("http://localhost:3000/livros", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            id: Id,
            nome: Nome
        })
    })
    
    const conectConvert = await conect.json()
    
    return conectConvert
}

async function deletarLivro(Id) {
    const connect = await fetch(`http://localhost:3000/livros/${Id}`, {
        method: "DELETE"
    })
}

export const conectaApi = {
    adicLivros,
    deletarLivro
}