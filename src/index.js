import './index.css'
const searchButton = document.querySelector('.search button');
searchButton.addEventListener('click', function() {
  const searchTerm = document.querySelector('.search input').value;
  alert('You searched for: ' + searchTerm);
});

