import   { useState }  from "react"

const Exercicio5 = () => {
    const [inputValue, setInputValue] = useState("")
    const [result, setResult] = useState("")

    function handleEx5(event) {
        event.preventDefault()
    
        const input = inputValue

        if(input === ""){
          return
        }
    
        var re = /[\W_]/g;
        var lowRegStr = input.toLowerCase().replace(re, '')
        var reverseStr = lowRegStr.split('').reverse().join('')
        const isPalindrome = reverseStr === lowRegStr
    
        if (isPalindrome) {
          setResult(<label style={{color: "blue"}}>É um palíndromo</label>)
          return isPalindrome
        } else {
          setResult(<label style={{color: "red"}}>Não é um palíndromo</label>)
          return isPalindrome
        }
      }

      
      return(
        <>
        <h1>Exercicio 5</h1>
        <form
        onSubmit={handleEx5}
        >
            <input type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Ok</button>
            {result}       
        </form>

        </>
    )
}

export default Exercicio5