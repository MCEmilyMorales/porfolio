// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export type Form = {
  email: string;
  asunto: string;
  mensaje: string;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, asunto, mensaje } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER, //se envia desde mi correo electronico para evitar el spoofing
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: asunto,
      text: mensaje,
    });

    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error enviando correo:", error.message);
      return NextResponse.json(
        { ok: false, message: error.message },
        { status: 500 },
      );
    }

    console.error("Error desconocido:", error);
    return NextResponse.json(
      { ok: false, message: "Error interno del servidor" },
      { status: 500 },
    );
  }
}
