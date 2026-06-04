import serviceRequest from "../models/serviceRequest.js";
import nodemailer from "nodemailer";

const submitServiceRequest = async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;
    const newRequest = new serviceRequest({
      name,
      email,
      phone,
      address,
    });
    await newRequest.save();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL,
      subject: "New CCTV Service Request",
      html: `
   <h2>New Customer Request</h2>
   <p><b>Name:</b> ${name}</p>
   <p><b>Email:</b> ${email}</p>
   <p><b>Phone:</b> ${phone}</p>
   <p><b>Address:</b> ${address}</p>
 `,
    });
    res.status(201).json({
      message: "Request submitted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export default submitServiceRequest;
