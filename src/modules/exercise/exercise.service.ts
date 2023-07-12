import { Injectable, Inject } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { Exercise } from './exercise.entity';

@Injectable()
export class ExerciseService {
  constructor(
    @Inject('EXERCISE_REPOSITORY')
    private exerciseRepository: typeof Exercise,
  ) {}

  async create(exerciseDto: CreateExerciseDto): Promise<Exercise> {
    return this.exerciseRepository.create<Exercise>();
  }
}
