import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemService) {}
  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }
  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
  }

  @Get(':id')
  findOne(@Param('id') id): Item {
    return this.itemsService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `Update ${id} - Name: ${updateItemDto.name}`;
  }
}
