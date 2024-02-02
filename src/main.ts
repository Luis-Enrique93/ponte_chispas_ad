import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ActiveDirectory } from './lib/active.directory'


async function bootstrap() 
{
    ActiveDirectory.Start()
    const app = await NestFactory.create(AppModule)
    await app.listen(3000)
}


bootstrap()
