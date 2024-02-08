import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ActiveDirectory } from './lib/active.directory'


async function bootstrap() 
{
    ActiveDirectory.Start(
        process.env.ACTIVE_DIRECTORY_IP,
        process.env.ACTIVE_DIRECTORY_PORT,
        process.env.ACTIVE_DIRECTORY_USERNAME,
        process.env.ACTIVE_DIRECTORY_PASSWORD
    )

    const app = await NestFactory.create(AppModule)
    await app.listen(3000)
}


bootstrap()
