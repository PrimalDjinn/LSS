import { sendEmail, renderContactEmail } from "../utils/email";
import { contactSchema } from "~~/shared/schemas/contact";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  // Parse and validate request body
  const body = await readBody(event);

  const result = contactSchema.safeParse(body);

  if (!result.success) {
    const errors = result.error.issues.map((issue) => ({
      field: issue.path.join(".") || "unknown",
      message: issue.message,
    }));

    throw createError({
      statusCode: 400,
      statusMessage: "Validation Error",
      data: { errors },
    });
  }

  const { name, email, message } = result.data;

  try {
    // Render Vue Email template
    const { html, text } = await renderContactEmail({
      name: name || "Anonymous",
      email,
      message,
    });

    // Send email
    await sendEmail({
      to: config.emailTo,
      subject: `Contact Form: Message from ${name || email}`,
      html,
      text,
      replyTo: email,
    });

    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error: any) {
    console.error("Contact form error:", error);

    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send message",
      data: {
        message:
          "An error occurred while sending your message. Please try again later.",
      },
    });
  }
});
