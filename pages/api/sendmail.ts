const sgMail = require('@sendgrid/mail');

export default async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_KEY);

  const { name, mail, message } = req.body;

  const content = {
    to: process.env.MAIL_RECEIVER,
    from: process.env.MAIL_SENDER,
    subject: `New Message From -  ${name}`,
    text: `${mail} - ${message}`,
    html: `<h2>${mail}</h2><p>${message}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully');
  } catch (error) {
    console.log('Error', error);
    res.status(400).send('Something went wrong');
  }
};
