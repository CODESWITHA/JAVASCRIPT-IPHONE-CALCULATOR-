"use strict";

// JS CALCULATOR

//MY CODE -HTML  DOM ELEMENTS

let hourEl = document.querySelector(".hour").textContent;
let minEl = document.querySelector(".min").textContent;
const displayEl = document.querySelector(".display");

// BUTTONS

// DISPLAY

// Operator Buttons
const acEl = document.querySelector(".ac");
const percentEl = document.querySelector(".percent");
const plusminusEl = document.querySelector(".pm");

// Function Buttons
const addEl = document.querySelector(".add");
const divideEl = document.querySelector(".divide");
const equalsEl = document.querySelector(".equals");
const minusEl = document.querySelector(".minus");
const timesEl = document.querySelector(".times");

// Number Buttons

const decimalEl = document.querySelector(".decimal");
const number0El = document.querySelector(".number-0");
const number1El = document.querySelector(".number-1");
const number2El = document.querySelector(".number-2");
const number3El = document.querySelector(".number-3");
const number4El = document.querySelector(".number-4");
const number5El = document.querySelector(".number-5");
const number6El = document.querySelector(".number-6");
const number7El = document.querySelector(".number-7");
const number8El = document.querySelector(".number-8");
const number9El = document.querySelector(".number-9");

const numberElArray = [
  number0El,
  number1El,
  number2El,
  number3El,
  number4El,
  number5El,
  number6El,
  number7El,
  number8El,
  number9El,
];

// Functions

// ⬇ This getter value will grab the currentDisplay and return it
// So whenever we need to get the value of the display we can just call this getDisplayValue function
// We also want this function to strip the commas and give the number back in 'strings'

const getDisplayValueAsString = () => {
  const currentDisplayString = displayEl.textContent;
  return currentDisplayString.split(",").join("");
};

const getDisplayValueAsNum = () => {
  return parseFloat(getDisplayValueAsString());
};

const setStringAsDisplayValue = (valueString) => {
  if (valueString[valueString.length - 1] === ".") {
    // ⬆ This is saying: if the last character in our valueString(our value string is the string that we typed into our calc) [valueString.length -1] is = to '.'
    //  >>> we want to add to what's currently there and add the dot after display.El+= '.'
    // displayEl.textContent = display.El.textContent + '.'
    displayEl.textContent += ".";
    return;
  }
  const [wholeNumString, decimalString] = valueString.split(".");
  console.log(wholeNumString, decimalString);

  if (decimalString) {
    displayEl.textContent =
      parseFloat(wholeNumString).toLocaleString() + "." + decimalString;
    // console.log(displayEl.textContent);
  } else {
    displayEl.textContent = parseFloat(wholeNumString).toLocaleString();
  }
};

//   if (displayEl.textContent.includes(".")) {
//     displayEl.textContent =
//       parseFloat(wholeNumString).toLocaleString() + "." + decimalString;
//   } else {
//     displayEl.textContent = parseFloat(wholeNumString).toLocaleString();
//   }
// };

const handleNumberClick = (numString) => {
  const currentDisplayString = getDisplayValueAsString();

  if (currentDisplayString === "0") {
    setStringAsDisplayValue(numString);
  } // numString is the number you click on
  else {
    setStringAsDisplayValue(currentDisplayString + numString);
    displayEl.textContent = parseFloat(
      currentDisplayString + numString
    ).toLocaleString();
  }
}; // numString is not a number but rather a string representation of numbers

// ADD EVENT LISTENERS TO FUNCTIONS
acEl.addEventListener("click", () => {
  setStringAsDisplayValue("0");
});

// ADD EVENTLISTENERS TO NUMBERS AND DECIMALS

for (let i = 0; i < numberElArray.length; i++) {
  const numberEl = numberElArray[i]; // Extracting the element and iteration position that we are currently interested in
  numberEl.addEventListener("click", () => {
    handleNumberClick(i.toString()); // as the argument that we are passing in is a string we need to make sure the iteration we are passing in is a string
    // we are passing through the [i] iteration of the numberElArray because as we click we want to represent the number - numString = [i]
  });
}

decimalEl.addEventListener("click", () => {
  const currentDisplayString = getDisplayValueAsString();

  if (!currentDisplayString.includes(".")) {
    setStringAsDisplayValue(currentDisplayString + ".");
    displayEl.textContent = currentDisplayString + ".";
  }
});

// Setting the time

let time = new Date();
let hours = String(time.getHours());
let minutes = String(time.getMinutes());

hourEl = hours.padStart(2, 0);
minEl = minutes.padStart(2, 0);

document.querySelector(".hour").textContent = `${hourEl}`;
document.querySelector(".min").textContent = `${minEl}`;

/* CALCULATOR FUNCTION */

// TUTORIAL- SET TIME

// let hour_El = document.querySelector(".hour");
// let min_El = document.querySelector(".min");

// Set up the time

// const updateTime = () => {
//   const currentTime = new Date();

//   const currentHour = currentTime.getHours();
//   const currentMinutes = currentTime.getMinutes();

//   hour_El.textContent = currentHour.toString().padStart(2, 0);
//   min_El.textContent = currentMinutes.toString().padStart(2, 0);
// };

// setInterval(updateTime, 1000); //function to update the time every 1 seond - we are calling the function in the setInterview () function
// updateTime();
