const express = require('express');
const router = express.Router()
const nodemailer = require('nodemailer');



// router.post('/', async (req, res) => {
//     res.json=``
//     }

      // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'angila.pokhrel58@gmail.com', // generated ethereal user
      pass: '@#password?!123!!!', // generated ethereal password
    },
    
  });

  // send mail with defined transport object
  let mailOptions = {
    from: "angila.pokhrel58@gmail.com",
    to: "sheela.pokhrel58@gmail.com", // list of receivers
    subject: "sending email using node.js", // Subject line
    text: "hello this is email sent by me to u", // plain text body
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if(error) {
        console.log(error);
    } else{
        console.log("email sent:" + info.response);
    }
  })

  

 



 
module.exports = router;