import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { DogsService } from './dogs.service';

import { CreateDogDto } from './dtos/create-dog.dto';

@Controller('dogs')
export class DogsController {
  constructor(public dogsService: DogsService) {}

  @Get()
  listDogs() {
    return this.dogsService.findAll();
  }

  @Post()
  createDog(@Body() body: CreateDogDto) {
    return this.dogsService.create(body.name);
  }

  @Get('/:id')
  async getDog(@Param('id') id: string) {
    const dog = await this.dogsService.findOne(id);

    if (!dog) {
      throw new NotFoundException('dog not found');
    }

    return dog;
  }
}
