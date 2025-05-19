import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
      console.log("🚀 Contact API triggered");
    // Get form data from request
    const formData = await request.json();
   
    const { name, email, message } = formData;
     console.log(name);
     console.log(email);
    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in all fields' },
        { status: 400 }
      );
    }
console.log(process.env.EMAIL_USER|| "not found")
    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `Portfolio Contact: Message from ${name}`,
      replyTo: email,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };
// const mailOptions2 = {
//   from: process.env.EMAIL_USER,
//   to: email,
//   subject: "Your message has been sent successfully ✅",
//   replyTo: process.env.EMAIL_USER,
//   text: `Your message has been sent successfully. Thank you for reaching out!`,
//   html: `
//     <h3>Your message has been sent successfully ✅</h3>
//     <p>Hi ${name},</p>
//     <p>Thanks for reaching out. I’ve received your message and will get back to you shortly.</p>
//     <hr>
//     <p><strong>Your Message:</strong></p>
//     <p>${message}</p>
//   `
// };

    // Send email
    await transporter.sendMail(mailOptions);
    //await transporter.sendMail(mailOptions2);
console.log("eail send");

    // Return success response
    return NextResponse.json(
      { message: 'Your message has been sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Sorry, something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}