import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsRepository } from './dogs.repository';
import { DogsService } from './dogs.service';

@Module({
  controllers: [DogsController],
  providers: [DogsService, DogsRepository],
})
export class DogsModule {}
