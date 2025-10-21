import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUser } from './dto/users.create.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor() {}

  @Post()
  async create(@Body() user: CreateUser) {}
}
