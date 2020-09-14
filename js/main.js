
let trailingResult = 0;
let operationOptions = ['decimal', 'divide', 'multiply', 'subtract', 'add'];
let workingOperation = "";

function updateDisplay(input){
    let display = document.getElementById("display");

    if(display.innerHTML === "0" && operationOptions.indexOf(input) === -1){
            display.innerHTML = input;
            
    } else if (operationOptions.indexOf(input) >= 0){
     if(workingOperation === ""){
            workingOperation = input;
            trailingResult = display.innerHTML
            display.innerHTML = 0;
     } else {
        
         trailingResult = calculate(trailingResult, display.innerHTML, workingOperation);
         display.innerHTML = 0;
         workingOperation = input;
        
     }
    } else if (input === "equals"){
            display.innerHTML = calculate(trailingResult, display.innerHTML, workingOperation);
            trailingResult = display.innerHTML;
            workingOperation = "";
    }else{
         display.innerHTML += input;
  }
}

function clearDisplay(){
    let display = document.getElementById("display");
    display.innerHTML = 0;
}

function calculate(firstNumber, secondNumber, operation){
    let result;
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    switch(operation) {
        case "add":
          // console.log("add calculated")
          result = firstNumber + secondNumber;
          break;
        case "subtract":
          // console.log("subtract calculated")
          result = firstNumber - secondNumber;
          break;
        case "multiply":
          // console.log("multiply calculated")
          result = firstNumber * secondNumber;
          break;
        case "divide":
          // console.log("divide calculated")
          result = firstNumber / secondNumber;
          break;
        default:
          console.log("Calculate switch statement missed something");
      }
      return result.toString();
}