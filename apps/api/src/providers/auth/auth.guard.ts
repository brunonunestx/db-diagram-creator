import { exceptions } from 'src/common/exceptions/exceptions-messages';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '../jwt/jwt.service';

@Injectable()
export class AuthGuard {
  constructor(private readonly jwt: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = this.getRequest(context);
    const token = this.getToken(request);

    if (!token)
      throw new UnauthorizedException(
        exceptions.auth.invalidCredentials.friendlyMessage,
      );

    const isValid = this.jwt.validateAccessToken(token);

    return !!isValid;
  }

  private getToken(request: Request) {
    const [type, token] = request.headers.authorization.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  private getRequest(context: ExecutionContext) {
    return context.switchToHttp().getRequest();
  }
}
