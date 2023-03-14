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
const generateBtn = document.querySelector(".GenerateBtn");
const allcheckbox = document.querySelector("input[type=checkbox]");
let symbols = "`!@#$%^&*(){}[]_+-<>?/|'\":;=";

let password = "";
let passwordLength = 15;
let checkCount = 1;
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

async function copyContent() {
  try {
    await navigator.clipboard.writeText(passwordDisplay.value);
    copyMsg.innerText = "copied";
  } catch (e) {
    copyMsg.innerText = "Failed";
  }

  copyMsg.classList.add("active");
  setTimeout(() => {
    copyMsg.classList.remove("active");
  }, 2000);
}

inputSlider.addEventListener('input',(e)=>{
    passwordLength=e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click',()=>{
  if(passwordDisplay.value)
      copyContent();
})

function handlecheckBoxChange()
{
    checkCount = 0;
    allcheckbox.forEach((checkbox)=>{
        if(checkbox().checked)
           checkCount++;
    });
    //special case
    if(passwordLength<checkCount)
        passwordLength = checkCount;
        handleSlider();
}

allcheckbox.array.forEach(checkbox => {
     checkbox.addEventListener('change',handlecheckBoxChange());
})

generateBtn.addEventListener('click',)

