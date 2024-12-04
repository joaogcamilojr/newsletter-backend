import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async find() {
    return await this.usersService.find();
  }

  @Post()
  async create(@Body() { name, email }: any) {
    return await this.usersService.create({ name, email });
  }

  @Patch(':id')
  async update(@Body() { name, email }: any, @Param('id') id: string) {
    return await this.usersService.update(+id, { name, email });
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.usersService.delete(+id);
  }
}
