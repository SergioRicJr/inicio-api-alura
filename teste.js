// teste para manipulação de arquivos de sistema

import  fs  from "fs"
const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"))
const novoDado = {id:'3', nome: "Livro mais que demais"}

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado]))

console.log(dadosAtuais)

