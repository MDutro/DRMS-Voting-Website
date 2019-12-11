const form = document.querySelector('form');

form.addEventListener('submit', event => {
  
  document.forms['contact-form'].submit();
  
  event.preventDefault();
});