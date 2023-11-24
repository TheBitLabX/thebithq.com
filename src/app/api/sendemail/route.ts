import { sendMail } from "@/utils/sendEmail";

var nodemailer = require("nodemailer");


export async function POST(req: Request, res: Response) {
    
    const body = await req.json();
    const { email, name, message } = body;


    const response = await sendMail(
        "New Message From Website",
        "info@thebithq.com",
        `
        Message:

        ${message}

        From:

        ${name}

        Contact email:

        ${email}
        
        `
      );

    return Response.json(response);

  }