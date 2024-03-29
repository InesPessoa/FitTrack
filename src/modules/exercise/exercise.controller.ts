import { Controller, Post, Body } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { Exercise } from './exercise.entity';

@Controller('exercise')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Post()
  createExercise(@Body() exerciseDto: CreateExerciseDto): Promise<Exercise> {
    return this.exerciseService.create(exerciseDto);
  }
}
