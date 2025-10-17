import { Logger } from '@nestjs/common';

export class LoggerService {
  logger: Logger;
  constructor() {
    this.logger = new Logger();
  }

  log(message: string, context: string) {
    const formattedMessage = this.formatMessage(message);
    this.logger.log(message, context);
  }

  private formatMessage(message: string) {}
}
