import { readFile, writeFile } from 'fs/promises';

export class DogsRepository {
  async findOne(id: string) {
    const contents = await readFile('dogs.json', 'utf-8');
    const dogs = JSON.parse(contents);

    return dogs[id];
  }

  async findAll() {
    const contents = await readFile('dogs.json', 'utf-8');
    const dogs = JSON.parse(contents);

    return dogs;
  }

  async create(content: string) {
    const contents = await readFile('dogs.json', 'utf-8');
    const dogs = JSON.parse(contents);

    const id = Math.floor(Math.random() * 99);

    dogs[id] = { id, name: content };

    await writeFile('dogs.json', JSON.stringify(dogs));
  }
}
