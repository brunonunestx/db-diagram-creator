import { CreateUser } from './dto/users.create.dto';
import * as bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export class UsersService {
  constructor() {}

  async create(user: CreateUser) {
    const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
  }

  private hashPassword(password: string) {}
}
