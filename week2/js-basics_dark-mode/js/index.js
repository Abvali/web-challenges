console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkmodeElement = document.querySelector('[data-js="dark-mode-button"]');
const lightmodeElement = document.querySelector('[data-js="light-mode-button"]')
const togglemodeElement = document.querySelector('[data-js="toggle-button"]');

darkmodeElement.addEventListener('click',() => {
    bodyElement.classList.add('dark');
});

lightmodeElement.addEventListener('click',() => {
    bodyElement.classList.remove('dark');
});

togglemodeElement.addEventListener('click' , () => {
    bodyElement.classList.toggle('dark');
});



