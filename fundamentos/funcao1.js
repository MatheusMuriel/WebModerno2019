// Função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Vai considerar o b como undefinied
imprimirSoma(2, 3, 4, 5, 6) // Vai pegar só os 2 primeiros e ignorar o resto

// Função com retorno
function soma(a, b = 0) { // Valor padrão de b = 0
  return a + b
}

console.log(soma(2, 3))
console.log(soma(2))