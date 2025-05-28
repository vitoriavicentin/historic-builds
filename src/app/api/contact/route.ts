import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';

const { window } = new JSDOM('');
const purify = DOMPurify(window as any);

export async function POST(request: Request) {
  const { firstName, lastName, email, phone, message } = await request.json();

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      {
        message:
          'Por favor, preencha todos os campos obrigatórios: Nome, Sobrenome, Email e Mensagem.',
      },
      { status: 400 },
    );
  }

  const sanitizedFirstName = purify.sanitize(firstName.trim());
  const sanitizedLastName = purify.sanitize(lastName.trim());
  const sanitizedEmail = purify.sanitize(email.trim());
  const sanitizedPhone = purify.sanitize(phone ? phone.trim() : '');
  const sanitizedMessage = purify.sanitize(message.trim());

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587', 10),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: sanitizedEmail,
      subject: `Contato do Site: ${sanitizedFirstName} ${sanitizedLastName}`,
      html: `
        <p><strong>Nome Completo:</strong> ${sanitizedFirstName} ${sanitizedLastName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Telefone:</strong> ${sanitizedPhone || 'Não fornecido'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${sanitizedMessage}</p>
      `,
    });

    // Retorna sucesso
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
