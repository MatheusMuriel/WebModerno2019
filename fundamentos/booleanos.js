let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo)
console.log(!!isAtivo)

if (isAtivo) {
  console.log(true)
} else {
  console.log(false)
}

// Verdadeiros
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // É retornado o valor atribuido, não se a atribuição deu certo

// Falsos
console.log(!!0)
console.log(!!'') // String vazia. (Espaços em branco são verdadeiros)
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))


console.log('pra finalizar...')

let nome = ''
console.log(nome || 'Desconhecido') // Um dos jeito JavaScript de fazer um valor padrão