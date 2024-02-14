import { IsNotEmpty, IsNumber, IsString } from 'class-validator'


export class Dto
{
    @IsNotEmpty()
    @IsString()
    public readonly user: string

    @IsNotEmpty()
    @IsString()
    public readonly password: string
}


export class SearchDto
{
    @IsNotEmpty()
    @IsString()
    public readonly query: string
}