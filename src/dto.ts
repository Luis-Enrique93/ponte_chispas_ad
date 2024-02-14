import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'


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
    @IsOptional()
    @IsString()
    public readonly query: string
}