
var nodemailer = require("nodemailer");

export async function sendMail(subject: string, toEmail: string, otpText: string): Promise<boolean> {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ideationlabx@gmail.com",
        pass: `rgry ceai hftb equd`,
      },
    });

    const mailOptions = {
      from: "ideationlabx@gmail.com",
      to: toEmail,
      subject: subject,
      text: otpText,
    };

    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error: string | undefined, info: any) => {
        if (error) {
          console.error('Error sending email:', error);
          reject(new Error(error));
        } else {
          console.log("Email Sent");
          resolve(true);
        }
      });
    });
}
