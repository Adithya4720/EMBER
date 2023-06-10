const button = document.getElementById('myButton');
const optionsContainer = document.getElementById('optionsContainer');

button.addEventListener('click', function() {
  if (optionsContainer.style.display === 'none') {
    optionsContainer.style.display = 'block';
  } else {
    optionsContainer.style.display = 'none';
  }
});
