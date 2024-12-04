import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async find() {
    const users = await this.prisma.users.findMany();

    return users;
  }

  async create({ name, email }) {
    await this.prisma.users.create({
      data: {
        email,
        name,
      },
    });
  }

  async update(id: number, { name, email }: any) {
    await this.prisma.users.update({
      where: {
        id,
      },
      data: {
        email,
        name,
      },
    });
  }

  async delete(id: number) {
    await this.prisma.users.delete({
      where: {
        id,
      },
    });
  }
}
