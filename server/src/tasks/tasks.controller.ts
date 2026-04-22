import { Controller, Get, Post, Put, Delete, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get('week/:weekId')
  findByWeek(@Param('weekId', ParseIntPipe) weekId: number) {
    return this.tasksService.findByWeek(weekId);
  }

  @Get('week/:weekId/day/:day')
  findByWeekAndDay(
    @Param('weekId', ParseIntPipe) weekId: number,
    @Param('day', ParseIntPipe) day: number,
  ) {
    return this.tasksService.findByWeekAndDay(weekId, day);
  }

  @Get('comprehensive-review')
  getComprehensiveReview(@Query('week', ParseIntPipe) week: number, @Query('day', ParseIntPipe) day: number) {
    return this.tasksService.getComprehensiveReview(week, day);
  }

  @Get('mistake-review')
  getMistakeReview(
    @Query('userId', ParseIntPipe) userId: number,
    @Query('week', ParseIntPipe) week: number,
    @Query('day', ParseIntPipe) day: number
  ) {
    return this.tasksService.getMistakeReview(userId, week, day);
  }

  @Get('batch')
  async batch(
    @Query('week') week?: string,
    @Query('ids') ids?: string
  ) {
    if (week) {
      return this.tasksService.findByWeek(parseInt(week));
    } else if (ids) {
      const taskIds = ids.split(',');
      return this.tasksService.findByIds(taskIds);
    }
    return [];
  }

  @Get(':taskId')
  findOne(@Param('taskId') taskId: string) {
    return this.tasksService.findOne(taskId);
  }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Put(':taskId')
  update(
    @Param('taskId') taskId: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.tasksService.update(taskId, updateTaskDto);
  }

  @Delete(':taskId')
  remove(@Param('taskId') taskId: string) {
    return this.tasksService.remove(taskId);
  }
}
