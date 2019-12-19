console.log('a = ', a) // Printa undefined, mas não deu erro pq o hoisting fez a inicialização dela ser subida
var a = 2
console.log('a = ', a)

console.log('b =', b) // Da erro, pois o hoisting só acontece com var
let b = 2
console.log('b =', b)