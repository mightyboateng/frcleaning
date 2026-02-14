import SMTPTransport from "nodemailer/lib/smtp-transport";
import nodemailer from "nodemailer";

export const nodemailerTransporter = nodemailer.createTransport({
  host: process.env.WEBSITE_MAIL_HOST,
  port: 587,
  secure: false,
  greetingTimeout: 60000, // 60s
  tls: {
    rejectUnauthorized: false,
  },
  auth: {
    user: process.env.WEBSITE_MAIL,
    pass: process.env.WEBSITE_MAIL_PASSWORD,
  },
} as SMTPTransport.Options);
