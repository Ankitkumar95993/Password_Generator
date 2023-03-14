const inputSlider = document.querySelector("[data-lengthSlider]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const copyBtn = document.querySelector("[data-copyBtn]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercasecheck = document.querySelector("#uppercase");
const lowercasecheck = document.querySelector("#lowercase");
const numberscheck = document.querySelector("#number");
const symbolscheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const genButton = document.querySelector(".GenerateButton");
const allcheckbox = document.querySelector("input[type=checkbox]");
let symbols = "`!@#$%^&*(){}[]_+-<>?/|'\":;=";

let password = "";
let passwordLength = 15;
let checkbox = 1;
handleSlider();

function handleSlider() {
  inputSlider.value = passwordLength;
  lengthDisplay.innerText = passwordLength;
}

function setIndicator(color) {
  indicator.style.backgroundColor = color;
  //shadow
}

function getRndInteger(min, max) {
  return Math.floor(Math.random * (max - min)) + min;
}

function generateRandomNumber() {
  return getRndInteger(0, 9);
}

function generateLowerCase() {
  return String.fromCharCode(getRndInteger(97, 123));
}

function generateUppercase() {
  return String.fromCharCode(getRndInteger(65, 91));
}

function generateSymbol() {
  const randNum = getRndInteger(0, symbols.length);
  return symbols.charAt(randNum);
}

function calStrength() {
  let hasUpper = false;
  let hasLower = false;
  let hasNum = false;
  let hasSym = false;
  if (uppercasecheck.checked) hasUpper = true;
  if (lowercasecheck.checked) hasLower = true;
  if (numberscheck.checked) hasNum = true;
  if (symbolscheck.checked) hasSym = true;

  if (hasUpper && hasUpper && (hasNum || hasSym) && passwordLength >= 8) {
    setIndicator("#0f0");
  } else if (
    (hasUpper || hasLower) &&
    (hasSym || hasNum) &&
    passwordLength >= 6
  ) {
    setIndicator("#ff0");
  } else {
    setIndicator("#f00");
  }
}
