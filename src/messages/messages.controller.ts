import { Controller, Get, Post, Param, Body } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  createMessage(@Body() body: any) {}

  @Get(':id')
  getMessage(@Param('id') id: String) {
    console.log(Controller);
  }
}
