require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;
const email = process.env.EMAIL_ADDRESS;
app.use(express.static('public'));
app.use(bodyParser.json());


// routes
app.get('/', (req, res) => 
  res.sendFile(path.join(__dirname, './drms-votes/public', 'index.html')));

app.post('/contact', (req, res) => {

  const transporter = nodemailer.createTransport({
    // host: "smtp.mailtrap.io",
    host: "smtp.sendgrid.net",
    port: 465,
    secure: true,
    auth: {
      user: user,
      pass: pass
    }
  });

  let mailOptions = {
    from: `${req.body.first} ${req.body.last} ${req.body.email}`,
    to: email,
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

app.listen(80);