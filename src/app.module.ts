import { Module } from '@nestjs/common';
import { HelloModule } from './modules/measures/hello.module';

@Module({
  imports: [HelloModule],
})
export class AppModule {}
