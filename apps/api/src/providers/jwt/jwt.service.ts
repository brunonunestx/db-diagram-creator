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
  private readonly refreshSecret: string = env.JWT_REFRESH_SECRET;
  private context = 'Jwt';

  constructor(private readonly logger: LoggerService) {}

  createToken(user: LoginUser): LoginResponse {
    if (
      (user.email === 'bruno.teixeira@gmail.com', user.password === 'teste')
    ) {
      const accessToken = jwt.sign(user, this.secret, { expiresIn: '24h' });

      const refreshToken = jwt.sign(user, this.refreshSecret, {
        expiresIn: '7d',
      });

      return { accessToken, refreshToken };
    }
  }

  refreshToken(refreshToken: string): LoginResponse {
    const validUserInfo = this.validateRefreshToken(refreshToken);

    if (!validUserInfo) {
      throw new UnauthorizedException(exceptions.auth.invalidCredentials.error);
    }

    const newAccessToken = jwt.sign(validUserInfo, this.secret, {
      expiresIn: '24h',
    });

    return { accessToken: newAccessToken, refreshToken };
  }

  validateAccessToken(token: string) {
    try {
      return jwt.verify(token, this.secret);
    } catch (error) {
      this.logger.log(exceptions.auth.invalidCredentials.error, this.context);
      throw new UnauthorizedException(
        exceptions.auth.invalidCredentials.friendlyMessage,
      );
    }
  }

  validateRefreshToken(token: string) {
    try {
      return jwt.verify(token, this.refreshSecret);
    } catch (error) {
      this.logger.log(exceptions.auth.invalidCredentials.error, this.context);
      throw new UnauthorizedException(
        exceptions.auth.invalidCredentials.friendlyMessage,
      );
    }
  }
}
