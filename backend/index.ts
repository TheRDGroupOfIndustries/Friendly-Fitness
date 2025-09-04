import express, { Request, Response } from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // your Gmail
    pass: process.env.EMAIL_PASS, // Gmail app password
  },
});

// API endpoint
app.post("/send-email", async (req: Request, res: Response) => {
  try {
    const { name, email, phone, interest, message } = req.body;

    if (!name || !email || !phone ) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    const mailOptions = {
      from:email,   // ✅ always email
      to: process.env.EMAIL_USER,     // ✅ goes to your inbox
      replyTo: email,                 // ✅ user’s email so you can reply
      subject: "New Interest Submission",
      html: `
        <h3>New Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Message:</strong> ${message || "No message provided"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email", error });
  }
});

// Run server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
