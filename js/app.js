document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const textInput = document.querySelector('#new-item-form');
textInput.addEventListener('input',handleInput);


});

const handleInput = function (event) {  
  event.preventDefault();
  const resultInput = document.querySelector('#reading-list');
  resultInput.textContent = `Title:${event.target.value}`;

}