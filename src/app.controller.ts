import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService,
    private jwtService: JwtService) {}


  @Post('login')
  async login(
    @Body('user') u: string,
    @Body('pass') contra: string
  ){
    const usuario = this.appService.findUser({u});

    if(!usuario){
      throw new BadRequestException('Usuario incorrecto');
    }

    if(! (contra == (await usuario).pass)){
      throw new BadRequestException('Contraseña incorrecta');
    }

    const jwt =await this.jwtService.signAsync({usuario}) ; 

    return jwt;
  }
  
}
