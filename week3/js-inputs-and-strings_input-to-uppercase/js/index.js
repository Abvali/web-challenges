console.clear();

/*
Convert the input value to uppercase when clicking the button

[ x] – Assign the input element to a variable
[ x] – Assign the button element to a variable
[ x] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked

Hint: Access the value by using `.value` on the input element

*/

let input = document.querySelector("[data-js=first-input]");
let button = document.querySelector("[data-js=button-uppercase]");

button.addEventListener("click" , () => {
    let value = input.value.toUpperCase();
    input.value = value;
}); 

