const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());


// routes
app.get('/', (req, res) => 
  res.sendFile(path.join(__dirname + '/index.html')));

app.post('/contact', (req, res) => {

  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 465,
    secure: false,
    auth: {
      user: 'bac969003ab3f7',
      pass: '92fe3e3829db44'
    }
  });

  let mailOptions = {
    from: `${req.body.first} ${req.body.last} ${req.body.email}`,
    to: 'bac969003ab3f7@mailtrap.io',
    subject: "New Message",
    text: `Name: ${req.body.first} ${req.body.last}

Telephone: ${req.body.phone}

${req.body.message}`
  }

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('message sent');
      res.status(200).send();
      // res.sendFile(path.join(__dirname + '/contact.html'));
    }
  });
});

app.listen(3000);