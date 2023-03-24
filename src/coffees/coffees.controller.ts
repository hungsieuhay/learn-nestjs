import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const {limit, offset} = paginationQuery
    return `This action return all coffees. Limit: ${limit}, offset: ${offset}`;
  }

  @Get(':id')
  findOne (@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }

  @Post()
//   @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} coffee`
  }

  @Delete(':id')
  remove(@Param('id') id:string) {
    return `This action removes #${id} coffee`
  }
}
