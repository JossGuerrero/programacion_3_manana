import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';
import { SendMailDto } from './dto/send-mail.dto';
import { SuccessResponseDto } from '../common/dto/response.dto';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('sendgrid')
  async sendSendGrid(@Body() dto: SendMailDto): Promise<SuccessResponseDto<any>> {
    try {
      const result = await this.mailService.sendWithSendGrid(dto);
      return new SuccessResponseDto('Correo enviado con SendGrid', result);
    } catch (error) {
      // Puedes manejar el error de manera más detallada si lo necesitas
      throw error;  // O lanzar un InternalServerErrorException
    }
  }
}
