import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ActiveDirectory } from './lib/active.directory'
import { ValidationPipe } from '@nestjs/common'


async function bootstrap() 
{
    // ActiveDirectory.Start(
    //     process.env.ACTIVE_DIRECTORY_IP2,
    //     process.env.ACTIVE_DIRECTORY_PORT,
    //     process.env.ACTIVE_DIRECTORY_USERNAME,
    //     process.env.ACTIVE_DIRECTORY_PASSWORD
    // )

    const app = await NestFactory.create(AppModule)
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    await app.listen(3000)
}


bootstrap()
