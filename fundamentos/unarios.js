let num1 = 1
let num2 = 2

num1++ // Pós fixada
console.log(num1)
--num1 // Pre fixada
console.log(num1)

// Os operadores pre fixados tem precedencia maior sobre os pós fixados

console.log(++num1 === num2--) // True porq a decrementação só acontece dps da comparação