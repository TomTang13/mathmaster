import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { WeeksService } from './weeks.service';
import { CreateWeekDto, UpdateWeekDto } from './dto/week.dto';

@Controller('weeks')
export class WeeksController {
  constructor(private readonly weeksService: WeeksService) {}

  @Get()
  findAll() {
    return this.weeksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.weeksService.findOne(id);
  }

  @Post()
  create(@Body() createWeekDto: CreateWeekDto) {
    return this.weeksService.create(createWeekDto);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateWeekDto: UpdateWeekDto,
  ) {
    return this.weeksService.update(id, updateWeekDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.weeksService.remove(id);
  }
}
