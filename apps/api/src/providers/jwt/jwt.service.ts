import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { env } from 'src/common/environment';
import { LoginUser } from 'src/types/user';
import { LoginResponse } from './types/jwt.types';
import { exceptions } from 'src/common/exceptions/exceptions-messages';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class JwtService {
  private readonly secret: string = env.JWT_SECRET;
  private context = 'Jwt';

  constructor(private readonly logger: LoggerService) {}

  createToken(user: LoginUser): LoginResponse {
    if (
      (user.email === 'bruno.teixeira@gmail.com', user.password === 'teste')
    ) {
      const token = jwt.sign(user, this.secret, { expiresIn: '24h' });
      return { accessToken: token };
    }
  }

  validateToken(token: string) {
    try {
      return jwt.verify(token, this.secret);
    } catch (error) {
      this.logger.log(exceptions.auth.invalidCredentials.error, this.context);
      throw new UnauthorizedException(
        exceptions.auth.invalidCredentials.friendlyMessage,
      );
    }
  }
}
