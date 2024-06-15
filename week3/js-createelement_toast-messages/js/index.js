console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

const newMessage = "New Message";
addButton.addEventListener("click", () => {
  const newAdd = document.createElement("li")
  
  newAdd.classList.add("toast-container__message");
  newAdd.textContent = newMessage;

toastContainer.append(newAdd);
  toastContainer.append(newAdd);
  // Exercise: Append a new entry to the toast messages container
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = " ";
  // Exercise: Clear the stack of toast messages
});
