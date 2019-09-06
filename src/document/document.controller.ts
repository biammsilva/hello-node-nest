import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class DocumentController {

  @Get()
  getDocuments(@Param() params): object {
    return [
      {
        'id': '1',
        'name': `Client ${params.clientId} Document 1`
      }, {
        'id': '2',
        'name': `Client ${params.clientId} Document 2`
      }
    ];
  }
}
