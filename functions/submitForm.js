const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  try {
    const { name, email, phone, subject, message } = JSON.parse(event.body);

    // Create a Nodemailer transporter and send the email
    const transporter = nodemailer.createTransport({
      host: 'email-smtp.eu-west-1.amazonaws.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });

    const mailOptions = {
      from: 'repairs-webiste@surfacemagic.ie',
      to: 'repairs@surfacemagic.ie',
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    };

    const info = await transporter.sendMail(mailOptions);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Email sending failed' }),
    };
  }
};
