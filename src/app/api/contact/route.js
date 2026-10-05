import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // BASIC VALIDATION
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Please complete all fields." },
        { status: 400 }
      );
    }

    // SEND EMAIL
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["ramkirstensantos@gmail.com"],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `
New message from your portfolio

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        { error: "Failed to send message." },
        { status: 500 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Message sent successfully.",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}