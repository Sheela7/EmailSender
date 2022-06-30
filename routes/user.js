const express = require('express');
const router = express.Router()
const nodemailer = require('nodemailer');



router.post('/', async (req, res) => {
    const userEmail = req.body.email
    console.log(userEmail)
    
      // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PASSWORD, // generated ethereal password
    },
    
  });

  // send mail with defined transport object
  let mailOptions = {
    from: process.env.EMAIL,
    to: userEmail, // list of receivers
    subject: "sending email using node.js", // Subject line
    text: "hello this is email sent by me to u", // plain text body
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if(error) {
       res.json("Error!!! Please enter email properly");
    } else{
      res.json(`Thank you for sending email ${userEmail}`) 
    }
  })
})
module.exports = router;