import { Controller, Get, Query } from '@nestjs/common'
import { AppService } from './app.service'
import { SearchDto } from './dto'


@Controller()
export class AppController 
{
    constructor(private readonly appService: AppService) { }


    @Get()
    public async getHello() 
    {
        return 'hola'
    }


    @Get('/search')
    public async search(@Query() search: SearchDto)
    {
        return await this.appService.getHello(search.query)
    }


    @Get('/sg')
    public async sg()
    {
        return await this.appService.securityGroup()
    }
}