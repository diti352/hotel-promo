 import { NextResponse } from "next/server";
 import nodemailer from "nodemailer";
 export async function POST(req:
    Request) {
        const body = await req.json();
        const transporter = nodemailer .createTransport({
            service: "gmail",auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        await transporter.sendMail({
           from:"ditiendrit405@gmail.com",
           to: "ditiendrit405@gmail.com",
           subject: "Rezervim i ri nga website",
           text:`
           Emri: ${body.name}
           Email: ${body.email}
           Telefoni: ${body.phone}
           Check-in:${body.checkIn}
           Check-out:${body.checkOut}
           ,`
        });
        return NextResponse.json({ success:true});
    }
