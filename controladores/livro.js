import fs from "fs"

function getLivros(req, res){
    try {
        const livros = JSON.parse(fs.readFileSync("livros.json"))
        res.send(livros)
    } catch(error) {
        res.status(500).send(error.message)
    }
}

export default getLivros