# Desafio Siimp Sistemas



## Exercício 1
Remover todas as vogais de uma  palavra.
```javascript
var input = inputValue
 
const semVogais = input.replace(/[aeiou]/gi, '')

return semVogais
```
Esse foi o desafio mais fácil.
Apenas usei a função replace para trocar as vogais da palavra que está na variável input.


## Exercício 2
Retornar a palavra que conter a maior quantidade de caracteres.

``` javascript
const input = inputValue

const inputSplit = input.split(' ')

const palavraMaisLonga = inputSplit.sort((a, b) => {
    return b.length - a.length
})

return palavraMaisLonga[0]
```

Não tive dificuldades em completar esse desafio. 
Dividi o input em substrings usando o split e retornei como uma array.
Depois usei a função sort para ordenar a array de maior para o menor a quantidade de caracteres de cada palavra. 
Com isso o primeiro elemento da array é a palavra mais longa.

## Exercício 3
Retornar a soma de todos os dígitos.

```javascript
const input = inputValue

const inputSplit = String(input).split('')

let sum = 0

for (let i = 0; i < inputSplit.length; i++) {
    sum += Number(inputSplit[i])
}

return sum
```
Também não tive dificuldades em completar esse desafio.
Transformei o input em string e depois usei o método split igual do exercício 2.
Criei um for loop para somar cada elemento da array e guardar na variável sum.

## Exercício 4
Listar todos os números do 1 até o número informado. No entanto: Se o número for divisível por 3, substitua o número da listagem pela palavra HELLO. Caso o número for divisível por 5, substitua o número da listagem pela palavra WORLD. Caso o número for divisível por ambos (3 e 5), substitua o
número da listagem pelas palavras HELLO WORLD.

```javascript
const input = inputValue
       
const numArr = []

for (let i = 1; i <= input; i++) {
    numArr[i] = i
}
 
for (let i = 1; i <= input; i++) {
    if (numArr[i] % 3 === 0 && numArr[i] % 5 === 0) {
            numArr[i] = "HELLO WORLD"
    }else if (numArr[i] % 5 === 0) {
            numArr[i] = "WORLD"
    
    }else if (numArr[i] % 3 === 0) {
            numArr[i] = "HELLO"
    }
}
return numArr
```
Tive dificuldades no início mas depois consegui completar sem problemas. 

Criei um for loop para inicializar uma array em que o tamanho é o valor do input.
Depois percorri a array usando for e dentro do loop usei um if statement para achar os números divisíveis por 3 ou 5.

## Exercício 5
Verificar se é um palíndromo.

```javascript
const input = inputValue

if(input === ""){
    return
}
    
var re = /[\W_]/g;
var lowRegStr = input.toLowerCase().replace(re, '')
var reverseStr = lowRegStr.split('').reverse().join('')
const isPalindrome = reverseStr === lowRegStr
    
if (isPalindrome) {
    return "É um palíndromo"
} else {
    return "Não é um palíndromo"
    }
}
```
Demorei um pouco para entender de como eu iria solucionar o desafio mas depois de varias tentativas consegui achar a solução. 

Criei duas variáveis:

LowRegStr: É o input com as palavras em lowerCase e sem espaço.
ReverseStr: É a variavel LowRegStr só que envertido.

No final é só comparar as duas variáveis, se for igual é um palíndromo, se não, não é um palíndromo. 

## Exercício 6
Verificar se a palavra e/ou frase inserida no campo de texto pode se tornar um palíndromo se UMA letra da palavrae/oufrase for removida.

```javascript
      let input = inputValue

       var re = /[\W_]/g;
       input = input.toLowerCase().replace(re, '')

       var len = input.length

       let umaLetra = 0

       for (var i = 0; i < len / 2; i++) {
         if (input[i] !== input[len - 1 - i]) {

           umaLetra =+ 1
           console.log(umaLetra)
         }
       }

      if (umaLetra === 1) {
         return "Pode se tornar um palíndromo"
       } else if (umaLetra > 1) {
         return "Não é um palíndromo"
       }
       return "É um palíndromo"

```
Não consegui achar uma solução para esse desafio, com certeza foi o mais difícil entre os sete, tentei pesquisar na internet mas não entendi muito bem e preferi não fazer.

Usei o mesmo raciocino lógico do exercício 5, que foi comparar caracter por caracter do input e input invertido, com isso, iria achar o número de caracteres que não deram match, achei que com esse número eu descobriria se a string pode se tornar um palíndromo, só que esse raciocínio está errado.

## Exercício 7
Retornar a soma de todos os números ENTRE os dois números digitados pelo usuário.

```javascript

          const input1 = inputValue
          const input2 = inputValue2

          const ifIsInterger = Number.isInteger(Number(input1))
          const ifIsInterger2 = Number.isInteger(Number(input2))

          if(!ifIsInterger && !ifIsInterger2 ){
             return "Somente números inteiros serão testados."
          }

          if (input1 < input2) {
            const high = Math.max(input1, input2)
      
            const low = Math.min(input1, input2)
      
            const sum = high * (high + 1) / 2 - (low - 1) * (low) / 2
      
            return sum
      
          } else if (input2 < input1) {
            return 0
      
          } else if (input1 === input2) {
            return input1
          }
        }
```
Nesse desafio tive que pesquisar na internet uma fórmula matemática para resolver.

A fórmula: high(high + 1)/2 - (low - 1)(low)/2
low: é o valor mais baixo entre o input1 e input2
high: é o valor mais alto entre o input1 e input2  

Esse talvez tenha sido o segundo mais difícil, não tava conseguindo pensar em uma fórmula matemática que resolveria esse problema e por isso tive que pesquisar na internet.


