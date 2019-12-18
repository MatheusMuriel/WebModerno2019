const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

// Template string tbm considera quebra de linha
const template = `
  Olá
  ${nome}!`

console.log(concatenacao, template)

// Expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()

console.log(`Ei... ${up('cuidado')}!`)