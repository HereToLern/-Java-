const input = document.querySelector('input'); 
const button = document.querySelector('button'); 
const duplicateField = document.querySelector('#duplicateField'); 

input.addEventListener('input', (event) => {
    event.preventDefault();
    duplicateField.textContent = input.value;
})

button.addEventListener('click', (event) => {
    console.log(input.value);
    input.value = '';
    duplicateField.textContent = '';
})