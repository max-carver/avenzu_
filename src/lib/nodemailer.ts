import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "maxevans3108@gmail.com",
    pass: process.env.APP_PASSWORD,
  },
});

export const mailOptions = {
  from: "maxevans3108@gmail.com",
  to: "maxevans3108@gmail.com",
};
