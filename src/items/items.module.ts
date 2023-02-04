import { Module } from '@nestjs/common';
import { ItemService } from './items.service';
import { ItemsController } from './items.controller';

@Module({
  imports: [],
  controllers: [ItemsController],
  providers: [ItemService],
})
export class ItemsModule {}
