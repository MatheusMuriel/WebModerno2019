const a = {name: 'Teste'}

console.log(a)

const b = a

b.name = 'Opa'

console.log(b)

let c = 3

let d = c

d++

console.log(c)
console.log(d)

let valor // Declarado mas não inicializado
console.log(valor)

valor = null // ausência de valor
console.log(valor)

const produto = {}

console.log(produto.preco) // undefined 
// console.log(produto.preco.a) // erro... (Pois tenta ler uma propriedade de um undefined)

produto.preco = null // Sem preço
delete produto.preco // Deleta o atributo
