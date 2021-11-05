import { Injectable, UnsupportedMediaTypeException } from '@nestjs/common';
import { user } from './user.entity';

@Injectable()
export class AppService {


  findUser(condition: any): user{
    let miUsuario = new user(1,"admin","estefano_ramos@outlook.com","123456") ;

    if (condition.u != miUsuario.usuario )
      return null;

    return miUsuario;
  }
}
