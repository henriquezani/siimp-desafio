import { useState } from "react"

const Exercicio1 = () => {
    const [inputValue, setInputValue] = useState("")
    const [result, setResult] = useState("")

    function handleEx1(event) {
        event.preventDefault()

        var input = inputValue
        const semVogais = input.replace(/[aeiou]/gi, '')

        setResult(semVogais)
        return semVogais

    }

    return (
        <>
            <h1>Exercicio 1</h1>
            <form
                onSubmit={handleEx1}
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

export default Exercicio1