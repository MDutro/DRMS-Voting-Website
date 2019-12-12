// const form = document.getElementById('contact-form');

// form.addEventListener('click', event => {
//   event.preventDefault();
//   document.forms['contact-form'].submit();
//   console.log("Look it's working!!!");
// });

const form = document.getElementById('contact-form');
let getFieldValue = name => {
    return form.querySelector(`[name=${name}]`).value;
  }

form.addEventListener('submit', e => {
  e.preventDefault();

  
  
  let data = {
    first: getFieldValue('firstName'),
    last: getFieldValue('lastName'),
    email: getFieldValue('email'),
    phone: getFieldValue('telNum'),
    message: getFieldValue('message')
  }


  fetch("/contact", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => {
    console.log(response);
  }).catch(error => console.log(error))
});