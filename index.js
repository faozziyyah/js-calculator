
// calculator Object
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };

  //input digits
function inputDigit(digit){
    const {displayValue, waitingForSecondOperand} = calculator;
    
    if (waitingForSecondOperand === true) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;
    } else {
    
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
    
  console.log(calculator);
  
  }

  //update the display
function updateDisplay(){
    //select the element with class calculator-screen
    const display = document.querySelector('.calculator-screen');
    //update the value of the element with the content of displayValue
    display.value = calculator.displayValue;
  }
  updateDisplay();

  //handle key presses
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  
  const {target} = event;
  const {value} = target;
  
 if (!target.matches('button')) {
   return;
 }
 
 switch (value) {
   case '+':
   case '-':
   case '*':
   case '/':
   case '=':
     // code
     handleOperator(value);
     break;
     
      case '.':
     // code
     inputDecimal(value);
     break;
     
      case 'all-clear':
     // code
     resetCalculator();
     break;
   
   default:
     // code
if (Number.isInteger(parseFloat(value))) {
  inputDigit(target.value);
}

 }
  updateDisplay();
  
});

//input decimal point
function inputDecimal(dot){
  
    if (calculator.waitingForSecondOperand === true) {
      calculator.displayValue = '0.';
      calculator.waitingForSecondOperand = false;
      
      return;
    }
    
    if (!calculator.displayValue.includes(dot)) {
      calculator.displayValue += dot;
    }
    
  }

  //handling operators
function handleOperator(nextOperator){
  
    const {firstOperand, displayValue, operator} = calculator;
    
    const inputValue = parseFloat(displayValue);
    
    if (operator && calculator.waitingForSecondOperand) {
      calculator.operator = nextOperator;
      console.log(calculator);
      return;
    }
    
    if (firstOperand === null && !isNaN(inputValue)) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
      calculator.firstOperand = result;
    }
    
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
    
  }

  function calculate(firstOperand, secondOperand, operator) {
  
    if (operator === '+') {
      return firstOperand + secondOperand;
    } else if (operator === '-') {
      return firstOperand - secondOperand;
    } else if (operator === '*') {
      return firstOperand * secondOperand;
    } else if (operator === '/') {
      return firstOperand / secondOperand;
    }
    
    return secondOperand;
    
  }
  
  //reset calculator
  function resetCalculator(){
    calculator.displayValue = '0';
    calculator.firstOperand = 'null';
    calculator.waitingForSecondOperand = 'false';
    calculator.operator = 'null';
    console.log(calculator);
  }

  //delete
  let outputScreen = document.getElementById("calcscreen");
  let deleteScreen = document.getElementById("del");
  deleteScreen.addEventListener("click", deleteOutput);
  function deleteOutput() {

    
    outputScreen.value = outputScreen.value.slice(0,-1);

  }
  

  /*   toggle calculator to theme      */

let theme2 = document.getElementById("theme2");
let theme1 = document.getElementById("theme1");
let theme3 = document.getElementById("theme3");
let bodybg = document.getElementById("body");
let togglebg = document.getElementById("toggle");
let calcscreen = document.getElementById("calcscreen");
let calckeys = document.getElementById("calckeys"); 
let delbtn = document.getElementById("del");
let clearbtn = document.getElementById("clear");
let equalbtn = document.getElementById("equal");

let calc = document.getElementById("logo");
let theme = document.getElementById("theme");
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
  
// theme 2

theme2.addEventListener("click", showtheme2);

function showtheme2() {

  //let displayval = calcscreen.textContent;

  bodybg.style.backgroundColor = "hsl(0, 0%, 90%)";
  equalbtn.style.backgroundColor = "hsl(25, 98%, 40%)";
  equalbtn.style.color = "white";
  clearbtn.style.backgroundColor = "hsl(185, 42%, 37%)";
  clearbtn.style.boxShadow = "none";
  delbtn.style.backgroundColor = "hsl(185, 42%, 37%)";
  delbtn.style.boxShadow = "none";
  theme2.style.backgroundColor = "hsl(25, 98%, 40%)";
  togglebg.style.backgroundColor = "hsl(0, 5%, 81%)";
  calckeys.style.backgroundColor = "hsl(0, 5%, 81%)";
  calcscreen.style.backgroundColor = "hsl(0, 0%, 93%)";
  calcscreen.style.color = "black";
  calc.style.color = "black";
  theme.style.color = "black";
  first.style.color = "black";
  second.style.color = "black";
  third.style.color = "black";
  theme3.style.backgroundColor = "hsl(0, 5%, 81%)";
  theme1.style.backgroundColor = "hsl(0, 5%, 81%)";
  
  let buttons = document.querySelectorAll(".btn");
 
  for (let i = 0; i < buttons.length; i++) {
    if ( theme2.style.backgroundColor = "hsl(25, 98%, 40%)" ) {
      buttons[i].style.backgroundColor = "hsl(45, 7%, 89%)";
      buttons[i].style.boxShadow = "2px 2px 9px -2px hsl(35, 11%, 61%)";
      buttons[i].style.color = "hsl(60, 10%, 19%)";
    }  
  }

}

// theme 3

theme3.addEventListener("click", showtheme3);

function showtheme3() {

  //let displayval = calcscreen.textContent;

  bodybg.style.backgroundColor = "hsl(268, 75%, 9%)";
  equalbtn.style.backgroundColor = "hsl(176, 100%, 44%)";
  equalbtn.style.color = "hsl(198, 20%, 13%)";
  clearbtn.style.backgroundColor = "hsl(281, 89%, 26%)";
  clearbtn.style.boxShadow = "2px 2px 9px -2px hsl(285, 91%, 52%)";
  delbtn.style.backgroundColor = "hsl(281, 89%, 26%)";
  delbtn.style.boxShadow = "2px 2px 9px -2px hsl(285, 91%, 52%)";
  theme3.style.backgroundColor = "hsl(176, 100%, 44%)";
  togglebg.style.backgroundColor = "hsl(268, 71%, 12%)";
  calckeys.style.backgroundColor = "hsl(268, 71%, 12%";
  calcscreen.style.backgroundColor = "hsl(268, 71%, 12%)";
  calcscreen.style.color = "hsl(52, 100%, 62%)";
  calc.style.color = "hsl(52, 100%, 62%)";
  theme.style.color = "hsl(52, 100%, 62%)";
  first.style.color = "hsl(52, 100%, 62%)";
  second.style.color = "hsl(52, 100%, 62%)";
  third.style.color = "hsl(52, 100%, 62%)";
  theme2.style.backgroundColor = "hsl(268, 71%, 12%";
  theme1.style.backgroundColor = "hsl(268, 71%, 12%";
  //displayval.style.color = "black";
  let buttons = document.querySelectorAll(".btn");
 
  for (let i = 0; i < buttons.length; i++) {
    if ( theme3.style.backgroundColor = "hsl(176, 100%, 44%)" ) {
      buttons[i].style.backgroundColor = "hsl(268, 47%, 21%)";
      buttons[i].style.boxShadow = "2px 2px 9px -2px hsl(290, 70%, 36%)";
      buttons[i].style.color = "hsl(52, 100%, 62%)";
    }  
  }

}


// theme 1

theme1.addEventListener("click", showtheme1);

function showtheme1() {

  //let displayval = calcscreen.textContent;

  bodybg.style.backgroundColor = "hsl(222, 26%, 31%)";
  equalbtn.style.backgroundColor = "hsl(6, 63%, 50%)";
  equalbtn.style.color = "white";
  clearbtn.style.backgroundColor = "hsl(225, 21%, 49%)";
  clearbtn.style.boxShadow = "none";
  delbtn.style.backgroundColor = "hsl(221, 21%, 49%)";
  delbtn.style.boxShadow = "none";
  theme1.style.backgroundColor = "hsl(6, 63%, 50%)";
  togglebg.style.backgroundColor = "hsl(223, 31%, 20%)";
  calckeys.style.backgroundColor = "hsl(223, 31%, 20%";
  calcscreen.style.backgroundColor = "hsl(224, 36%, 15%)";
  calcscreen.style.color = "#fff";
  calc.style.color = "#fff";
  theme.style.color = "#fff";
  first.style.color = "#fff";
  second.style.color = "#fff";
  third.style.color = "#fff";
  theme2.style.backgroundColor = "hsl(223, 31%, 20%";
  theme3.style.backgroundColor = "hsl(223, 31%, 20%";

  let buttons = document.querySelectorAll(".btn");
 
  for (let i = 0; i < buttons.length; i++) {
    if ( theme1.style.backgroundColor = "hsl(6, 63%, 50%)" ) {
      buttons[i].style.backgroundColor = "hsl(30, 25%, 89%)";
      buttons[i].style.boxShadow = "2px 2px 9px -2px hsl(28, 16%, 65%)";
      buttons[i].style.color = "hsl(221, 14%, 31%)";
    }  
  }



}


  

  
  