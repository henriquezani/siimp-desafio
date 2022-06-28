import   { useState }  from "react"

const Exercicio4 = () => {
    const [inputValue, setInputValue] = useState("")
    const [result, setResult] = useState("")

    function handleEx4(event) {
        event.preventDefault()
    
        const input = inputValue
    
    
        const numArr = []
        // first initialize the array with the values
        for (let i = 1; i <= input; i++) {
          numArr[i] = i
        }
    
    
        for (let i = 1; i <= input; i++) {
          if (numArr[i] % 3 === 0 && numArr[i] % 5 === 0) {
            numArr[i] = "HELLO WORLD"
    
          } else if (numArr[i] % 5 === 0) {
            numArr[i] = "WORLD"
    
          } else if (numArr[i] % 3 === 0) {
            numArr[i] = "HELLO"
          }
        }
    
        setResult(numArr)
        return numArr
      }

    return(
        <>
        <h1>Exercicio 4</h1>
        <form
        onSubmit={handleEx4}
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

export default Exercicio4