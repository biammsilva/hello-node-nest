import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { DocumentModule } from './document/document.module';
import { RouterModule } from 'nest-router';
import { routes } from './routes';

@Module({
  providers: [AppService],
  imports: [
    RouterModule.forRoutes(routes),
    ClientModule, 
    DocumentModule],
})
export class AppModule {}
