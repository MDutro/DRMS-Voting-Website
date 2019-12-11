const form = document.getElementById('contact-form');

form.addEventListener('click', event => {
  event.preventDefault();
  document.forms['contact-form'].submit();
  console.log("Look it's working!!!");
});