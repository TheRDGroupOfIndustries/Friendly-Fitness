import express, { Request, Response } from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your Gmail app password
  },
});

const logoPath = path.join(__dirname, "..", "assets", "logo-BvW6dI4u.jpg");
console.log("LOGO PATH EXISTS:", fs.existsSync(logoPath));
console.log("CURRENT DIR:", __dirname);

// API endpoint
app.post("/send-email", async (req: Request, res: Response) => {
  try {
    const { name, email, phone, interest, message } = req.body;

    if (!name || !email || !phone) {
      return res
        .status(400)
        .json({ message: "Name, email, and phone are required" });
    }

    // 1. Email to the Admin (Your Inbox)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: "fitnessevolution108@gmail.com",
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
          <div style="text-align: center; ">
             <img src="cid:logoImage" style="width: 150px; " />
            </div>
          <div style="background-color: #f4f4f4; padding: 20px; text-align: center;">
            <h2 style="margin: 0; color: #333;">New Form Submission</h2>
          </div>
          <div style="padding: 20px; color: #555; line-height: 1.6;">
            <p>You have received a new inquiry from your website's contact form.</p>
            <div style="background-color: #fafafa; padding: 15px; border-radius: 5px; margin-top: 20px;">
              <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>
              <p style="margin: 5px 0;"><strong>Interest:</strong> ${
                interest || "Not specified"
              }</p>
              <p style="margin: 5px 0;"><strong>Message:</strong></p>
              <p style="margin: 5px 0; padding-left: 10px; border-left: 2px solid #ddd;">${
                message || "No message provided"
              }</p>
            </div>
          </div>
          <div style="background-color: #f4f4f4; padding: 10px; text-align: center; font-size: 12px; color: #888;">
            <p>This email was sent from your website's contact form.</p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: "logo.jpg",
          path: logoPath,
          cid: "logoImage",
        },
      ],
    };

    // 2. Confirmation Email to the User
    const userMailOptions = {
      from: `"Fitness Evolution" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We've received your inquiry!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
         <div style="text-align: center;">
             <img src="cid:logoImage" style="width: 150px; " />
            </div>
          <div style="background-color: #f4f4f4; padding: 20px; text-align: center;">
            <h2 style="margin: 0; color: #333;">Thank You For Reaching Out!</h2>
          </div>
          <div style="padding: 20px; color: #555; line-height: 1.6;">
            <p>Hello ${name},</p>
            <p>Thank you for getting in touch with us. We have successfully received your message and appreciate your interest.</p>
            <p>One of our team members will review your submission and get back to you as soon as possible, typically within 24-48 hours.</p>
            <p><strong>Here's a copy of the information you submitted:</strong></p>
            <div style="background-color: #fafafa; padding: 15px; border-radius: 5px; margin-top: 20px;">
                <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>
                <p style="margin: 5px 0;"><strong>Message:</strong> ${
                  message || "No message provided"
                }</p>
            </div>
            <p style="margin-top: 20px;">Best regards,<br/>Fitness evolution </p>
          </div>
          <div style="background-color: #f4f4f4; padding: 10px; text-align: center; font-size: 12px; color: #888;">
            <p>You are receiving this email as a confirmation of your submission on our website.</p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: "logo.jpg",
          path: logoPath,
          cid: "logoImage",
        },
      ],
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email", error });
  }
});
app.post("/membership", async (req: Request, res: Response) => {
  try {
    const {
      name,
      email,
      phone,
      planName,
      // planPrice,
      message,
    } = req.body;

    if (!name || !email || !phone || !planName) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: "fitnessevolution108@gmail.com",
      replyTo: email,
      subject: `New Membership Sign-up: ${planName} Plan`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
        <div style="text-align: center; ">
             <img src="cid:logoImage" style="width:150px; " />
            </div>
          <div style="background-color: #0F172A; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">New Membership Inquiry</h2>
          </div>
          <div style="padding: 20px; color: #333; line-height: 1.6;">
            <p>A new user has signed up for a membership plan.</p>
            <div style="background-color: #fafafa; padding: 15px; border-radius: 5px; margin-top: 20px;">
              <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>
              
              <p style="margin: 10px 0 5px;"><strong>Message:</strong></p>
              <p style="margin: 5px 0; padding-left: 10px; border-left: 2px solid #ddd;">${
                message || "No message provided"
              }</p>
            </div>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: "logo.jpg",
          path: logoPath,
          cid: "logoImage",
        },
      ],
    };

    //  <p style="margin: 5px 0;"><strong>Selected Plan:</strong> ${planName} (${planPrice})</p>
    const userMailOptions = {
      from: `"Fitness Evolution" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome! Your Membership Inquiry has been received.",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
         <div style="text-align: center; ">
             <img src="cid:logoImage" style="width:150px; " />
            </div>
          <div style="background-color: #0F172A; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">Welcome, ${name}!</h2>
          </div>
          <div style="padding: 20px; color: #333; line-height: 1.6;">
            <p>Thank you for choosing the <strong>${planName}</strong> plan. We've received your inquiry and are excited to have you join our community.</p>
            <p>A member of our team will contact you shortly to finalize your registration.</p>
            <p>Best regards,<br/>The Team</p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: "logo.jpg",
          path: logoPath,
          cid: "logoImage",
        },
      ],
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email", error: error });
  }
});
// Run server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
