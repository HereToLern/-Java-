
document.querySelector('a').addEventListener('click', 
    function() {
        const userText = prompt('Текст Please?');
        const userTextField = document.querySelector('a');
userTextField.textContent = userText;
  })
