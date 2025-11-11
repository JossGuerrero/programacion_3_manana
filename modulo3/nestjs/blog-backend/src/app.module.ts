import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BasicsModule } from './basics/basics.module';

@Module({
  imports: [AuthModule, BasicsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
