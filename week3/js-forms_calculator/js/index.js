console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const formDataObject = new FormData(event.target);
  // console.dir(formDataObject);
  const dataObject = Object.fromEntries(formDataObject);

  // console.dir(dataObject);

  const valueNumberA = Number(dataObject.numberA);
  // console.dir(typeof valueNumberA);

  const valueNumberB = Number(dataObject.numberB);
  // console.log(typeof valueNumberB);

  const valueOperator = dataObject.operator;
  // console.dir(typeof valueOperator);

  
  if (valueOperator === "addition") {
    result = add(valueNumberA, valueNumberB);
  }

  if (valueOperator === "subtraction") {
    result = subtract(valueNumberA, valueNumberB);
  }

  if (valueOperator === "multiplication") {
    result = multiply(valueNumberA, valueNumberB);
  }

  if (valueOperator === "division") {
    result = divide(valueNumberA, valueNumberB);
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});

