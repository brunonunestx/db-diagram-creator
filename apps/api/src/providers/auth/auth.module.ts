import { Module } from '@nestjs/common';
import { LoggerModule } from '../logger/logger.module';
import { JwtModule } from '../jwt/jwt.module';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [LoggerModule, JwtModule],
  providers: [AuthGuard],
  exports: [AuthGuard],
})
export class AuthModule {}
