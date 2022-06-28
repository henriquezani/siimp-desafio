import   { useState }  from "react"

const Exercicio2 = () => {

    const [inputValue, setInputValue] = useState("")
    const [result, setResult] = useState("")

    function handleEx2(event) {
        event.preventDefault()
    
        const input = inputValue
    
        const inputSplit = input.split(' ')
    
        const palavraMaisLonga = inputSplit.sort((a, b) => {
          return b.length - a.length
        })
        
        setResult(palavraMaisLonga[0])
        return result
      }
    
    return(
        <>
        <h1>Exercicio 2</h1>
        <form
        onSubmit={handleEx2}
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

export default Exercicio2