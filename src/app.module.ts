import { Module } from '@nestjs/common';
import { HelloModule } from './modules/measures/hello.module';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ExerciseModule } from './modules/exercise/exercise.module';

@Module({
  imports: [
    HelloModule,
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ExerciseModule,
  ],
})
export class AppModule {}
