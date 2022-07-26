import './App.css';
import {useState} from "react";
function App() {
    const [operand1, setOperand1]= useState('')
    const [operand2, setOperand2]= useState('')
    const [result, setResult] = useState('result: ')
    const [currentOperand,setCurrentOperand] = useState("operand2")
    const [show, setShow] = useState(true)






    const changeInput1 = function (event){
        const input = event.target.value
        setOperand1(input)
    }

    const changeInput2 = function (event){
        const input = event.target.value
        setOperand2(input)
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
        <div>
            <fieldset>
                <legend>
                    Choose operand {currentOperand}
                </legend>


                <div onClick={() => chooseOperand("operand1")}>
                    <input type={"radio"} id={"radio1"} name={"currentOperand"} value={currentOperand} checked={currentOperand === 'operand1'}/>
                    <label for={"radio1"}>operand1</label>
                </div>
                <div onClick={() => chooseOperand("operand2")}>
                    <input type={"radio"}  id={"radio2"} name={"currentOperand"} value={currentOperand} checked={currentOperand === 'operand2'}/>
                    <label for={"radio2"} >operand2</label>
                </div>


            </fieldset>


            <input placeholder={"operand1"} onInput={changeInput1} value={operand1}/>


            <button onClick={() => clickHandler("+")}>+</button>
            <button onClick={() => clickHandler("-")}>-</button>
            <button onClick={() => clickHandler("*")}>*</button>
            <button onClick={() => clickHandler("/")}>/</button>
            <button onClick={() => clickHandler("x^y")}>x^y</button>
            <button onClick={() => clickHandler("fraction division")}>fraction division</button>



            <input placeholder={"operand2"} onInput={changeInput2} value={operand2}/>



            <div>

            </div>

            {show && (
            <div>
                {numList.map((item) => {
                   return  (
                       <button  key={item} onClick={() => typeInput(item)}>{item}</button>
                   )
                })}

            </div>
            )}

            <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>






            <h1>{result}</h1>
        </div>
    )
}
export default App;