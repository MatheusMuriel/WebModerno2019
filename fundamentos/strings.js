const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // Não da erro, apenas retorna vaziu...
console.log(typeof escola.charAt(5))

console.log(escola.charCodeAt(3)) // Retorna o valor do unicode
console.log(escola.indexOf('r'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) // Não inclusivo (Va do zero e me de 3 caracteres)

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")

console.log(escola.replace(/\d/, 'e'))

console.log('Ana,Maria,Pedro'.split(','))