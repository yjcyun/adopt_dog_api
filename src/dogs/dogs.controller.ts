import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CreateDogDto } from './dtos/create-dog.dto';

@Controller('dogs')
export class DogsController {
  @Get()
  listDogs() {}

  @Post()
  createDog(@Body() body: CreateDogDto) {
    console.log(body);
  }

  @Get('/:id')
  getDog(@Param('id') id: string) {
    console.log(id);
  }
}
