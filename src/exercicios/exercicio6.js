import { useState } from "react"

const Exercicio6 = () => {
  const [inputValue, setInputValue] = useState("")
  const [result, setResult] = useState("")


   function handleEx6(event) {
       event.preventDefault()

       let input = inputValue

       var re = /[\W_]/g;
       input = input.toLowerCase().replace(re, '')

       var len = input.length

       let umaLetra = 0

       for (var i = 0; i < len / 2; i++) {
         if (input[i] !== input[len - 1 - i]) {
           umaLetra =+ 1
         }
       }

      if (umaLetra === 1) {
         setResult("Pode se tornar um palíndromo")
         console.log(umaLetra)
         return false
       } else if (umaLetra > 1) {
         setResult("Não é um palíndromo")
         console.log(umaLetra)
         return false
       }

       setResult("É um palíndromo")
       return true
     }

  return (
    <>
      <h1>Exercicio 6</h1>
      <form
        onSubmit={handleEx6}
      >
        <input type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Ok</button>
        <label>{result}</label>
      </form>

    </>
  )
}

export default Exercicio6