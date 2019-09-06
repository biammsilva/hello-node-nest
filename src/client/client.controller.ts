import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class ClientController {

  @Get(':id')
  getClient(@Param() params): object {
    return {
      'id': params.id,
      'name': `Client ${params.id}`
    };
  }

  @Get()
  getClients(): object {
    return [
      {
        'id': '1',
        'name': 'Client 1'
      }, {
        'id': '2',
        'name': 'Client 2'
      }
    ];
  }
}
