import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemService {
  private readonly items: Item[] = [
    {
      id: '123456789',
      name: 'item one',
      qty: 100,
      description: 'This is item one',
    },
    {
      id: '1234511189',
      name: 'item two',
      qty: 200,
      description: 'This is item two',
    },
    {
      id: '12345678009',
      name: 'item three',
      qty: 300,
      description: 'This is item three',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }
}
