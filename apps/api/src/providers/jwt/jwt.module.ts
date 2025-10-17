import { Module } from '@nestjs/common';
import { LoggerModule } from '../logger/logger.module';
import { JwtService } from './jwt.service';

@Module({
  imports: [LoggerModule],
  providers: [JwtService],
  exports: [JwtService],
})
export class JwtModule {}
