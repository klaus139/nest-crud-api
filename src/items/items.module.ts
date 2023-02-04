import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemService } from './items.service';
import { ItemsController } from './items.controller';
import { ItemSchema } from './schemas/items.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
  controllers: [ItemsController],
  providers: [ItemService],
})
export class ItemsModule {}
