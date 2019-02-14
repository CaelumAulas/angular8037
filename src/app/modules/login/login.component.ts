import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  dadosDoLogin = {
    email: '',
    senha: ''
  };

  // 1 - OK Vincular via [(ngModel)] o email e a senha do "dadosDoLogin" com os campos
  // 2 - Adicionar um evento de submit no formulário
  // 3 - Fazer um console.log no submit testando se ta tudo certo

  constructor(private httpClient: HttpClient) { }

  handleLoginUsuario(formLoginUsuario: NgForm) {
    // fetch('http://localhost:3200/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     email: 'omariosouto@cmail.com.br',
    //     password: '123'
    //   })
    // })
    // .then((resposta) => {
    //   console.log(resposta)
    // })
    const dadosDoLoginDTO = {
      email: this.dadosDoLogin.email,
      password: this.dadosDoLogin.senha,
    };

    this.httpClient.post('http://localhost:3200/login', dadosDoLoginDTO)
      .subscribe((dadosDoServer) => {
        console.log(dadosDoServer)
      });


    if (formLoginUsuario.valid) {
      console.log(formLoginUsuario.value);
    } else {
      console.log('Força todos os campos a ficarem touched');
    }
  }

}
