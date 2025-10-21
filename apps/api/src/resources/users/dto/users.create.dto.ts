import { ApiProperty } from '@nestjs/swagger';

export class CreateUser {
  @ApiProperty({ example: 'bruno.teixeira@gec.inatel.br' })
  email: string;

  @ApiProperty({ example: 'Bruno Nunes Teixeira' })
  name: string;

  @ApiProperty({ example: 'Admin@123' })
  password;
}
