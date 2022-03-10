import { Injectable } from '@nestjs/common';
import { DogsRepository } from './dogs.repository';

@Injectable()
export class DogsService {
  constructor(public dogsRepo: DogsRepository) {}

  findOne(id: string) {
    return this.dogsRepo.findOne(id);
  }

  findAll() {
    return this.dogsRepo.findAll();
  }

  create(content: string) {
    return this.dogsRepo.create(content);
  }
}
