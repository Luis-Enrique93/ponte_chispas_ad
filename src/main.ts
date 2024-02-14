import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ActiveDirectory } from './lib/active.directory'
import { ValidationPipe } from '@nestjs/common'


async function bootstrap() 
{
    console.log('variables de entorno')
    console.log(process.env)
    console.log(process.env.ACTIVE_DIRECTORY_PORT)
    console.log(process.env.ACTIVE_DIRECTORY_IP)

    try
    {
        ActiveDirectory.Start(
            process.env.ACTIVE_DIRECTORY_IP,
            process.env.ACTIVE_DIRECTORY_IP2,
            process.env.ACTIVE_DIRECTORY_PORT,
            process.env.ACTIVE_DIRECTORY_USERNAME,
            process.env.ACTIVE_DIRECTORY_PASSWORD
        )
    }
    catch (e)
    {
        console.log(e)
    }

    const app = await NestFactory.create(AppModule)
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    await app.listen(process.env.PORT || 4000)
}


bootstrap()
