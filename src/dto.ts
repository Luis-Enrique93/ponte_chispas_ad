import { IsNotEmpty, IsString } from 'class-validator'


export class Dto
{
    @IsNotEmpty()
    @IsString()
    user: string

    @IsNotEmpty()
    @IsString()
    password: string
}