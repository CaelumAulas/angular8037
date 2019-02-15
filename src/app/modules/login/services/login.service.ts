import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators'

@Injectable()
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  logarUsuario(dadosDoLogin:
    { email: string, password: string }) {
    console.log('Logar usuario', dadosDoLogin);
    // fazer uma requisição
    return this.httpClient.post('http://localhost:3200/login', dadosDoLogin)
        .pipe(
            map((dadosDoServer: any) => {
              // pegar o token e guardar
              localStorage.setItem('TOKEN', dadosDoServer.token);
            })
        );

  }
}
