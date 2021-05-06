document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const textInput = document.querySelector('#new-item-form');
textInput.addEventListener('submit',handleInput);


});

const handleInput = function (event) {  
  event.preventDefault();
  const list = document.querySelector('#reading-list');
  const book = document.createElement('li');
  list.appendChild(book);
  book.textContent = `Title:${event.target.title.value}`;

}


