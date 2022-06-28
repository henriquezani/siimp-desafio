import { useState } from "react"

const Exercicio3 = () => {

    const [inputValue, setInputValue] = useState("")
    const [result, setResult] = useState()

    function handleEx3(event) {
        event.preventDefault()

        const input = inputValue

        const inputSplit = String(input).split('')

        let sum = 0

        for (let i = 0; i < inputSplit.length; i++) {
            sum += Number(inputSplit[i])
        }

        setResult(sum)
        return sum
    }

    return (
        <>
            <h1>Exercicio 3</h1>
            <form
                onSubmit={handleEx3}
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

export default Exercicio3