import * as nodemailer from 'nodemailer';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SendMailDto } from './dto/send-mail.dto';
import axios from 'axios';

@Injectable()
export class MailService {
  // Enviar correo con Gmail usando Nodemailer
  async sendMail(dto: SendMailDto) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    try {
      const info = await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: dto.to,
        subject: dto.subject,
        html: dto.message,
      });
      return { messageId: info.messageId };
    } catch (error) {
      throw new InternalServerErrorException('No se pudo enviar el correo');
    }
  }

  // Obtener usuarios desde una API pública
  async fetchUserListFromPublicApi() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.data;
  }

  // Enviar correo con SendGrid
  async sendWithSendGrid(dto: SendMailDto) {
    try {
      const res = await axios.post(
        'https://api.sendgrid.com/v3/mail/send',
        {
          personalizations: [{ to: [{ email: dto.to }] }],  // Asegúrate de que el campo 'to' sea un array
          from: { email: process.env.SENDGRID_SENDER },  // Asegúrate de que 'SENDGRID_SENDER' esté bien configurado
          subject: dto.subject,
          content: [{ type: 'text/html', value: dto.message }],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,  // Asegúrate de que la API Key de SendGrid esté correctamente configurada
            'Content-Type': 'application/json',
          },
        }
      );

      return { status: res.status };  // Status 202 si todo sale bien
    } catch (error) {
      // Puedes imprimir el error para depuración en desarrollo
      console.error(error);
      throw new InternalServerErrorException('No se pudo enviar el correo con SendGrid');
    }
  }
}
