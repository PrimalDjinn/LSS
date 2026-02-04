import { Resend } from "resend";
import { render } from "@vue-email/render";
import ContactEmail from "../emails/ContactEmail.vue";

interface ContactEmailData {
  name: string;
  email: string;
  message: string;
}

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  const config = useRuntimeConfig();

  // Check if Resend is configured
  if (!config.resendApiKey) {
    console.warn("Resend API key not configured. Email not sent.");
    // In development, just log the email
    if (import.meta.dev) {
      console.log("Email would be sent:", options);
      return true;
    }
    throw new Error("Email service not configured");
  }

  const resend = new Resend(config.resendApiKey);

  try {
    const { error } = await resend.emails.send({
      from: config.emailFrom,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
      replyTo: options.replyTo,
    });

    if (error) {
      console.error("Failed to send email:", error);
      throw new Error(error.message);
    }

    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
}

export async function renderContactEmail(data: ContactEmailData): Promise<{ html: string; text: string }> {
  const name = data.name || "Anonymous";

  // Render Vue Email template to HTML
  const html = await render(
    ContactEmail,
    {
      name,
      email: data.email,
      message: data.message,
    },
    {
      pretty: true,
    },
  );

  // Render plain text version
  const text = await render(
    ContactEmail,
    {
      name,
      email: data.email,
      message: data.message,
    },
    {
      plainText: true,
    },
  );

  return { html, text };
}
