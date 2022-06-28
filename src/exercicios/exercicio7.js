  import   { useState }  from "react"

  const Exercicio7 = () => {

      const [inputValue, setInputValue] = useState("")
      const [inputValue2, setInputValue2] = useState("")
      const [result, setResult] = useState("")

      function handleEx7(event) {
          event.preventDefault()
      
          const input1 = inputValue
          const input2 = inputValue2

          const ifIsInterger = Number.isInteger(Number(input1))
          const ifIsInterger2 = Number.isInteger(Number(input2))

          if(!ifIsInterger && !ifIsInterger2 ){
            setResult("Somente números inteiros serão testados.")
             return
          }

          if (input1 < input2) {
            const high = Math.max(input1, input2)
      
            const low = Math.min(input1, input2)
      
            const sum = high * (high + 1) / 2 - (low - 1) * (low) / 2
      
            setResult(sum)
            return sum
      
          } else if (input2 < input1) {
            setResult(0)
            return 0
      
          } else if (input1 === input2) {
            setResult(input1)
            return input1
          }
        }

      return(
          <>
          <h1>Exercicio 7</h1>
          <form
          onSubmit={handleEx7}
          >
              <input type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
              />
                <input type="text" 
                  value={inputValue2}
                  onChange={(e) => setInputValue2(e.target.value)}
              />
              <button type="submit">Ok</button>
              <label>{result}</label>
          </form>

          </>
      )

  }

  export default Exercicio7