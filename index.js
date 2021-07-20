const display = document.querySelector(".display");
const acButton = document.querySelector(".buttonAc");
const pmButton = document.querySelector(".buttonPm");
const delButton = document.querySelector(".buttonDel");
const divButton = document.querySelector(".buttonDiv");
const multButton = document.querySelector(".buttonMult");
const subtButton = document.querySelector(".buttonSubt");
const addButton = document.querySelector(".buttonAdd");
const decimalButton = document.querySelector(".buttonDecim");
const equalButton = document.querySelector(".buttonEqual");

const number0 = document.querySelector(".number0");
const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const number3 = document.querySelector(".number3");
const number4 = document.querySelector(".number4");
const number5 = document.querySelector(".number5");
const number6 = document.querySelector(".number6");
const number7 = document.querySelector(".number7");
const number8 = document.querySelector(".number8");
const number9 = document.querySelector(".number9");

const numbersArray = [
    number0,
    number1,
    number2,
    number3,
    number4,
    number5,
    number6,
    number7,
    number8,
    number9
]



let currentElement = "";
let previousElement = "";
let operation = "";
let temporaryElement = ""


function displayArea(){
    display.innerHTML = currentElement;
}

function AppendNumber(number){
    if (number === 0 && currentElement === "0") return;
    if(currentElement.length > 9) return;
    currentElement = currentElement.toString() + number.toString()
    displayArea();
}

function ChooseOperation(selectedOperation){
    if(temporaryElement){
        previousElement = temporaryElement.toString();
        currentElement = "";
        temporaryElement = "";
        operation = selectedOperation;
        displayArea();
        return;
    }
    operation = selectedOperation;
    previousElement = currentElement;
    currentElement = "";
    displayArea();
}

function compute(){
    let computation;
    const previous = parseFloat(previousElement);
    const current = parseFloat(currentElement)

    if(!operation) return;
    if(isNaN(previous) || isNaN(current)) return;

    switch (operation) {
        case "+":
            computation = previous + current;
            break;
            case "-":
                computation = previous - current;
            break;
            case "*":
                computation = previous * current;
            break;
            case ":":
                if(current){

                    computation = previous / current;
                }else{
                    return;
                }
            break;
    
        default:
            break;
    }
if (isNaN(computation)) return;

    currentElement = computation;
    previousElement = ""
    displayArea()
    temporaryElement = currentElement;
    currentElement = ""
}

function AllClear(){
currentElement = "";
previousElement = "";
operation = "";
displayArea()
}

function PlusMinus(){
    currentElement = currentElement * -1;
    displayArea()
}

function Delete (){
    currentElement = currentElement.substr(0, currentElement.length - 1)
    displayArea()
}

function Decimal(){
currentElement = parseFloat(currentElement) + "."
displayArea()
}

addButton.addEventListener("click", ()=>{
    ChooseOperation("+");
})

divButton.addEventListener("click", ()=>{
    ChooseOperation(":");
})

subtButton.addEventListener("click", ()=>{
    ChooseOperation("-");
})

multButton.addEventListener("click", ()=>{
    ChooseOperation("*");
})

equalButton.addEventListener("click", ()=> {
    compute()
})

acButton.addEventListener("click", ()=>{
    AllClear()
})
pmButton.addEventListener("click", ()=>{
    PlusMinus();
})
delButton.addEventListener("click", ()=>{
    Delete();
})
decimalButton.addEventListener("click", ()=>{
    Decimal();
})


for (let i = 0; i < numbersArray.length;  i++) {
    const number = numbersArray[i];

    number.addEventListener("click", ()=>{
        display.innerHTML = i;
        AppendNumber(i);
        temporaryElement = "";
    })    
}