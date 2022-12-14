import './App.css';
import {useState} from "react";
/*import {type} from "@testing-library/user-event/dist/type";*/
/*import {click} from "@testing-library/user-event/dist/click";*/
function App() {
    const [operand1, setOperand1] = useState('')
    const [operand2, setOperand2] = useState('')
    const [result, setResult] = useState('')
    const [currentOperand, setCurrentOperand] = useState("operand2")
    const [show, setShow] = useState(true)
    const [validated1, setValidated1] = useState("")
    const [validated2, setValidated2] = useState("")


    const del = function () {
        if (currentOperand === "operand1") {
            setOperand1(operand1.toString().slice(0, -1))
        } else {
            setOperand2(operand2.toString().slice(0, -1))
            setValidated1("Error")
        }

        if (currentOperand === "operand2") {
            setOperand2(operand2.toString().slice(0, -1))
        } else {
            setOperand2(operand2.toString().slice(0, -1))
            setValidated2("Error")
        }

    }

    const AC = function () {
        if (currentOperand === "operand1") {
            setOperand1("")
        } else {
            setOperand2("")
        }
    }

    const dot = function () {
        if (currentOperand === "operand1") {
            setOperand1(operand1 + ".")
        } else {
            setOperand2(operand2 + ".")
        }
    }

    const plusMinus = function () {
        if (currentOperand === "operand1") {
            if (Math.sign(parseFloat(operand1)) === 1) {
                setOperand1("-" + operand1)
            } else {
                setOperand1(operand1.substring(1))
            }
        }
    if (currentOperand === "operand2") {
        if (Math.sign(parseFloat(operand2)) === 1) {
            setOperand2("-" + operand2)
        } else {
            setOperand2(operand2.substring(1))
        }
    }
}





    const changeInput1 = function (event){
        const input = event.target.value
        const parsing = isNaN(input)
        if (parsing === false){
            setOperand1(input)

        } else {
            setOperand1("")
            setValidated1("Operand1 : Error. Wrong Symbols. Try again")
        }



    }

    const changeInput2 = function (event){
        const input = event.target.value
        const parsing = isNaN(input)
        if (parsing === false){
            setOperand2(input)
        } else {
            setOperand2("")
            setValidated2("Operand2: Error. Wrong Symbols. Try again")
        }
    }




    const clickHandler = function(item){
        setResult(item)

        switch (item) {
            case "+":
                setResult(parseFloat(operand1) + parseFloat(operand2))
                break;
            case "-":
                setResult(parseFloat(operand1) - parseFloat(operand2))
                break;
            case "*":
                setResult(parseFloat(operand1) * parseFloat(operand2))
                break;
            case "/":
                if (operand2 !== '0'){
                    setResult(parseFloat(operand1) / parseFloat(operand2))
                } else {
                    setResult("error")
                    alert("You cannot divide by zero!")
                }
                break;
            case "x^y":
                setResult(Math.pow(operand1,operand2))
                break;
            case "fraction division":
                setResult(Math.round(parseFloat(operand1) / parseFloat(operand2)))
                break;
            default:
                alert( "Error" );

        }




    }


    const typeInput = function(num){
        if (num.length > 1){
        }
        if (currentOperand === "operand1"){
            setOperand1((operand1) => operand1 + num)
        // setOperand1(num)
            /*switch (num) {
                case "1":
                    setOperand1('1')
                    break;
                case "2":
                    setOperand1('2')
                    break;
                case "3":
                    setOperand1('3')
                    break;
                case "4":
                    setOperand1('4')
                    break;
                case "5":
                    setOperand1('5')
                    break;
                case "6":
                    setOperand1('6')
                    break;
                case "7":
                    setOperand1('7')
                    break;
                case "8":
                    setOperand1('8')
                    break;
                case "9":
                    setOperand1('9')
                    break;
                case "0":
                    setOperand1('0')
                    break;
                default:
                    alert( "Error" );
            }*/
        } else {
        setOperand2((operand2) => operand2 + num)
        }


    }

    const chooseOperand = function(operand){
        setCurrentOperand(operand)

    }




    const numList = [1,2,3,4,5,6,7,8,9,0]







    return (
        <div className="container">
            <div className="display">
                <h1>{result}</h1>
            </div>

            <fieldset>
                <legend className="title">
                    Choose operand {currentOperand}
                </legend>

                <div className="chooseOperandFlex">
                    <div onClick={() => chooseOperand("operand1")} className="operand1">
                        <input type={"radio"} id={"radio1"} name={"currentOperand"} value={currentOperand}
                               checked={currentOperand === 'operand1'}/>
                        <label htmlFor={"radio1"}>operand1</label>
                    </div>
                    <div onClick={() => chooseOperand("operand2")} className="operand2">
                        <input type={"radio"} id={"radio2"} name={"currentOperand"} value={currentOperand}
                               checked={currentOperand === 'operand2'}/>
                        <label htmlFor={"radio2"}>operand2</label>
                    </div>
                </div>



            </fieldset>

            <div className="inputFlex">
            <input className="firstInput" onClick={() => chooseOperand("operand1")} placeholder={"operand1"} onInput={changeInput1} value={operand1}/>

            <input className="secondInput" onClick={() => chooseOperand("operand2")} placeholder={"operand2"} onInput={changeInput2} value={operand2}/>

            </div>

            <div className="validatedDiv">
                <h1>{validated1}</h1>
                <h1>{validated2}</h1>
            </div>


            <div className="operators">
                <button onClick={() => clickHandler("+")}>+</button>
                <button onClick={() => clickHandler("-")}>-</button>
                <button onClick={() => clickHandler("*")}>*</button>
                <button onClick={() => clickHandler("/")}>/</button>
                <button onClick={() => clickHandler("x^y")}>x^y</button>
                <button onClick={() => clickHandler("fraction division")}>fraction division</button>
                <button onClick={dot}>.</button>
                <button onClick={plusMinus}>+/-</button>
            </div>









            <div>

            </div>

            {show && (
            <div className="numberButtons">
                {numList.map((item) => {
                   return  (
                       <button  key={item} onClick={() => typeInput(item)}>{item}</button>

                   )

                })}

                <button onClick={del}>DEL</button>
                <button onClick={AC}>AC</button>

            </div>
            )}

            <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>







        </div>
    )
}
export default App;