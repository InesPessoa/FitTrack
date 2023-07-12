import { Exercise } from './exercise.entity';

export const exerciseProviders = [
  {
    provide: 'Exercise_REPOSITORY',
    useValue: Exercise,
  },
];
