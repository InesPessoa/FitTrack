import { Exercise } from './exercise.entity';

export const exerciseProviders = [
  {
    provide: 'EXERCISE_REPOSITORY',
    useValue: Exercise,
  },
];
