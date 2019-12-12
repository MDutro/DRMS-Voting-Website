const form = document.getElementById('contact-form');
const span = document.querySelector('span');

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
    if (response.status === 200) {
      span.innerHTML = '<p id="confirm">Message sent. You will be contacted by DRMS personnel within 3 business days.</p>'
      form.reset();
    }
    
  }).catch(error => console.log(error))
});