import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,

    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,

    to: options.to,

    subject: options.subject,

    text: options.text,
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;
