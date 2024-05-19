const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const { fullname, email, telephone, subject, message } = data;

  const msg = {
    to: 'lanchado10@gmail.com',
    from: {
      name: 'Contacto desde la web',
      email: process.env.FROM_EMAIL,
    },
    subject: subject,
    text: `Nombre: ${fullname}\nEmail: ${email}\nTeléfono: ${telephone}\n\nMensaje: ${message}`,
    html: `<p>Nombre: ${fullname}</p><p>Email: ${email}</p><p>Teléfono: ${telephone}</p><p>Mensaje: ${message}</p>`,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent');
  } catch (error) {
    console.error(error);
    console.log('Email not sent');
    if (error.response) {
      console.error(error.response.body);
    }
  }
};

module.exports = { sendEmail };
