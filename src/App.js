import './App.css';
import {useState} from "react";

function App() {
  const [operand1, setOperand1]= useState('')
  const [operand2, setOperand2]= useState('')
  const [result, setResult] = useState('result: ')

  const changeInput1 = function (event){
  const input = event.target.value
    setOperand1(input)
  }

  const changeInput2 = function (event){
    const input = event.target.value
    setOperand2(input)
  }

  const plus = function(){
    setResult(parseInt(operand1) + parseInt(operand2))
  }

  const minus = function(){
    setResult(parseInt(operand1) - parseInt(operand2))
  }

  const multiplicate = function(){
    setResult(parseInt(operand1) * parseInt(operand2))
  }

  const divide = function(){
    setResult(parseInt(operand1) / parseInt(operand2))
  }

  const square = function(){
    setResult(Math.pow(operand1,operand2))
  }

  const fraction = function(){
    setResult(Math.round(parseInt(operand1) / parseInt(operand2)))
  }



  return (
  <div>
    <input placeholder={"operand1"} onInput={changeInput1}/>
    <button onClick={plus}>+</button>
    <button onClick={minus}>-</button>
    <button onClick={multiplicate}>*</button>
    <button onClick={divide}>/</button>
    <button onClick={square}>x^y</button>
    <button onClick={fraction}>fraction division</button>
    <input placeholder={"operand2"} onInput={changeInput2}/>
    <h1>{result}</h1>
  </div>
  )
}

export default App;
