import { websiteContactTemplate } from "@/lib/email-templates/contact-mail";
import { nodemailerTransporter } from "@/lib/mail-controller";

export async function POST(req: Request) {
  const { name, email, phone, message, serviceType } = await req.json();

  try {
    await nodemailerTransporter.sendMail({
      from: process.env.WEBSITE_MAIL,
      to: process.env.WEBSITE_RECEIVE_MAIL,
      subject: `${name} is booking your ${serviceType} service `,
      html: websiteContactTemplate({
        name,
        email,
        phone,
        serviceType,
        message,
      }),
    });
    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response("Failed to send email", { status: 500 });
  }
}
