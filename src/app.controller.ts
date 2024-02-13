import { Controller, Get, Query } from '@nestjs/common'
import { AppService } from './app.service'
import { ActiveDirectory } from './lib/active.directory'
import { Dto } from './dto'


@Controller()
export class AppController 
{
    constructor(private readonly appService: AppService) { }


    @Get()
    public async getHello() 
    {
        return 'hola'
    }


    @Get('/login')
    public async login(@Query() loginData: Dto) 
    {
        try
        {
            ActiveDirectory.client.bind(loginData.user, loginData.password, (err) =>
            {
                // assert.ifError(err);
                if (err)
                    console.log('err:' + err)

                else
                    console.log('success')
            })
        }
        catch (e)
        {
            console.log(e)
        }
    }

    @Get('/search')
    public async search(@Query() searchData: Dto)
    {

    }
}


// ou=Users