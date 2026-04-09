"use server";

import { Resend } from "resend";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_MAILLER_KEY);
const ContactSchema = z.object({
  name: z.string().min(2, "Name too short").max(50),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message too short").max(1000),
});

export async function sendEmail(prevState, formData) {
  const result = ContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });
  console.log(result);
  // 3. Return field errors if invalid
  if (!result.success) {
    return {
      success: false,
      errors: z.flattenError(result.error).fieldErrors,
    };
  }

  const { name, email, message } = result.data;
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "codermyanmarjack@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    return {success: true , message: "Email sent!"};
  } catch (error) {
    return {success: false , message: "Failed. Try again."};
  }
}
