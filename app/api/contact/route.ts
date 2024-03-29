import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";
//import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
sgMail.setApiKey(process.env.SG_KEY as string);

async function sendEmail(msg: any) {
  try {
    await sgMail.send(msg);
    console.log("Email sent");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}


export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json("error: Method Not Allowed", { status: 405 });
  }
  if (req.method === "POST") {
    const { subject, email, message, full_name } =
      await req.json();
    const updates = {
      subject,
      email,
      message,
      full_name,
///form_type: "Inquiry",
    };
    if (!email) {
      return NextResponse.json("error: Email is required");
    }

    const msg = {
      to: email,
      cc: process.env.FROM_EMAIL as string,
     // bc: "info@cribnetwork.io",
      from: process.env.FROM_EMAIL as string,
      subject: "We've received your message!",
      text: "New Message from CRIB",
      html: `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <title>We've received your message!</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet">
          <style>
              /* Reset styles to ensure consistent rendering across email clients */
              body,
              html {
                  margin: 0;
                  padding: 0;
                  border: 0;
                  font-size: 100%;
                  font: inherit;
                  vertical-align: baseline;
                  line-height: 1;
              }
      
              /* Set the width of the email to be the maximum width */
              body {
                  max-width: 600px;
                  margin: 0 auto;
                  font-family: 'Roboto', sans-serif;
              }
          
              h1 {
                text-align: center;
                font-family: 'Roboto', sans-serif;
              }
              
              /* Center the image in the header */
              .header img {
                  display: block;
                  margin: 0 auto;
              }
      
              /* Style the footer */
              .footer {
                  margin-top: 2rem;
                  text-align: center;
                  font-size: 0.8rem;
                  color: #666;
              }
      
              .footer a {
                  color: #666;
                  text-decoration: none;
              }
      
              /* Style the content of the email */
              .content {
                  max-width: 600px;
                  padding: 3rem;
                  background-color: #507880;
                  margin-left: auto;
                  margin-right: auto;
              }
      
              .content h1 {
                  margin-top: 0;
                  margin-bottom: 1rem;
                  font-size: 1.5rem;
                  font-weight: bold;
              color: white;
              }
      
              .content p {
                  margin: 0;
                  margin-bottom: 1rem;
                  font-size: 1rem;
                  line-height: 1.5;
              color: white;
              }
      
              /* Add your logo image here */
              .logo img {
                  display: block;
                  margin: 0 auto;
                  max-width: 200px;
                  margin-top: 30px;
                  margin-bottom: 30px;
                                  filter: invert(1);
  
              }
                  .logo-foot img {
                  display: block;
                  margin: 0 auto;
                  max-width: 200px;
                  margin-top: 30px;
                  margin-bottom: 30px;
  
              }
  
              .main-image img {
                  display: block;
                  margin: 0 auto;
                  width: 100%;
                  margin-top: 30px;
                  margin-bottom: 30px;
                  border-radius: 10px;
              }
              
          </style>
      </head>
      
      <body>
      
          <div class="content">
              <div class="logo">
                  <img src="https://i.imgur.com/iQhKfW3.png" alt="CRIB Network Logo">
              </div>
              
              <div class="main-image">
              <img src="https://cdn.sanity.io/images/8vbqvubz/production/404fff52e6717659821daa62e43ae11e6febccce-800x800.png?w=384&q=75"/>
              </div>
              <h1 class="heading">We've received your message!</h1>
          <p>Thank you for reaching out to us through our website's contact form. Whatever your request is we'll be sure to respond quickly and get it taken care of! </p>
          <p><strong>Name:</strong> ${full_name}</p>
                <p><strong>Email:</strong>${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong> ${message}</p>
          </div>
          <div class="footer">
             <div class="logo-foot">
                  <img src="https://i.imgur.com/iQhKfW3.png" alt="CRIB Network Logo">
              </div>
              <p>&copy; 2023 Jaii Reynolds, Crib Music Global All rights reserved.</p>
              <p><a href="https://jaiireynolds.com/">jaiireynolds.com</a></p>
          </div>
      </body>
      
      </html>
    
    
    `,
    };

    const [emailSent] = await Promise.all([
      sendEmail(msg),
     // insertData(updates),
    ]);

    if (emailSent) {
      return NextResponse.json({ success: true, ok: true });
    } else {
      return NextResponse.json({
        error: "Error sending email or inserting data",
        ok: false,
      });
    }
  }

  return NextResponse.json({ error: "Method not allowed", ok: false });
}
