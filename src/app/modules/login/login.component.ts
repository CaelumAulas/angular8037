import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  dadosDoLogin = { email: 'omariosouto@cmail.com.br', senha: '123' };
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  handleLoginUsuario(formLoginUsuario: NgForm) {
    console.log(this.router)
    // Serviço
    if (formLoginUsuario.valid) {
      const dadosDoLoginDTO = {
        email: this.dadosDoLogin.email,
        password: this.dadosDoLogin.senha,
      };
      this.loginService.logarUsuario(dadosDoLoginDTO)
        .subscribe(() => {
          console.log('redirect aqui');
          // Faz reload: window.location.href = '/inbox';
          this.router.navigate(['/inbox']);
        })
    } else {
      // tratamento de erros
    }
  }

}
