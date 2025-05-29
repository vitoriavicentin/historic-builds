import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';

const purify = DOMPurify(new JSDOM('').window as any);

function sanitize(input: string = ''): string {
  return purify.sanitize(input.trim());
}

export async function POST(request: Request) {
  const { firstName, lastName, email, phone = '', message } = await request.json();

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      {
        message:
          'Por favor, preencha todos os campos obrigatórios: Nome, Sobrenome, Email e Mensagem.',
      },
      { status: 400 },
    );
  }

  const sanitized = {
    firstName: sanitize(firstName),
    lastName: sanitize(lastName),
    email: sanitize(email),
    phone: sanitize(phone),
    message: sanitize(message),
  };

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: { rejectUnauthorized: false },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: sanitized.email,
      subject: `Contato do Site: ${sanitized.firstName} ${sanitized.lastName}`,
      html: `
        <p><strong>Nome Completo:</strong> ${sanitized.firstName} ${sanitized.lastName}</p>
        <p><strong>Email:</strong> ${sanitized.email}</p>
        <p><strong>Telefone:</strong> ${sanitized.phone || 'Não fornecido'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${sanitized.message}</p>
      `,
    });

    return NextResponse.json({ message: 'Mensagem enviada com sucesso!' }, { status: 200 });
  } catch (error: any) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      {
        message:
          error.message ||
          'Falha ao enviar o email. Por favor, verifique as configurações do SMTP.',
      },
      { status: 500 },
    );
  }
}
