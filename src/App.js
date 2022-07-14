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

/*
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
*/

const clickHandler = function(item){
  setResult(item)
/*  if (item === "+"){
    setResult(parseInt(operand1) + parseInt(operand2))
  }

  if (item === "-"){
    setResult(parseInt(operand1) - parseInt(operand2))
  }

  if (item === "*"){
    setResult(parseInt(operand1) * parseInt(operand2))
  }

  if (item === "/"){
    setResult(parseInt(operand1) / parseInt(operand2))
  }

  if (item === "x^y"){
    setResult(Math.pow(operand1,operand2))
  }

  if (item === "fraction division"){
    setResult(Math.round(parseInt(operand1) / parseInt(operand2)))
  }*/
  switch (item) {
    case "+":
      setResult(parseInt(operand1) + parseInt(operand2))
      break;
    case "-":
      setResult(parseInt(operand1) - parseInt(operand2))
      break;
    case "*":
      setResult(parseInt(operand1) * parseInt(operand2))
      break;
    case "/":
      setResult(parseInt(operand1) / parseInt(operand2))
      break;
    case "x^y":
      setResult(Math.pow(operand1,operand2))
      break;
    case "fraction division":
      setResult(Math.round(parseInt(operand1) / parseInt(operand2)))
      break;
    default:
      alert( "Error" );
  }
}

  return (
  <div>
    <input placeholder={"operand1"} onInput={changeInput1}/>
    <button onClick={() => clickHandler("+")}>+</button>
    <button onClick={() => clickHandler("-")}>-</button>
    <button onClick={() => clickHandler("*")}>*</button>
    <button onClick={() => clickHandler("/")}>/</button>
    <button onClick={() => clickHandler("x^y")}>x^y</button>
    <button onClick={() => clickHandler("fraction division")}>fraction division</button>
    <input placeholder={"operand2"} onInput={changeInput2}/>
    <h1>{result}</h1>
  </div>
  )
}

export default App;
