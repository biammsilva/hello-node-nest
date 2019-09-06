import { Routes } from 'nest-router';
import { ClientModule } from './client/client.module';
import { DocumentModule } from './document/document.module';

export const routes: Routes = [
    {
      path: '/client',
      module: ClientModule,
      children: [
        {
          path: '/:clientId/document',
          module: DocumentModule,
        }
      ],
    },
  ];