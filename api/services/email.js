const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pk0175903@gmail.com',
    pass: 'djhaktghiqyhdcam'
  }
});

const sendMail = async (data)=>{
  var mailOptions = {
    from: 'adsewap@gmail.com',
    to: data.to,
    subject: data.subject,
    text: data.message
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  }
  catch(err)
  {
    return false;
  }
}

module.exports = {
  sendMail
}
