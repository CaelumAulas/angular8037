import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  formCadastro: FormGroup;

  constructor(private httpClient: HttpClient) {
    // Observable

    // por padrão o retorno de QUALQUER opearação do http Client é o body do response
    // github.com/omariosouto

    // url.map(function(valorAtual) { return { urlInvalida: true } } )

    // fetch('https://avatars0.githubusercontent.com/u/1asdadss3791385?s=460&v=4')
    //   .then(function (resposta) {
    //     console.log(resposta)
    //   })
  //  evento.subscribe(function(dadoQueVeioDoFluxoQueNesseCasoTemOMap) {
  //   // Estamos se inscrevendo na operação que está acontecendo
  //   // É um gatilho pra disparar a requisição
  //   console.log('dadoQueVeioDoMap', dadoQueVeioDoFluxoQueNesseCasoTemOMap);
  // });

    this.formCadastro = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(10)]),
      username: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{4}-[0-9]{4}[0-9]?')]),
      avatar: new FormControl('', [Validators.required], this.validaImagem)
   });
  }
  // Explicar o Bind
  validaImagem = (formControl) => {
    console.log('this do validaImagem', this);

    const evento = this.httpClient.head(formControl.value, { observe: 'response' })
    .pipe( // Estruturar nossa lógica aqui no meio
      map((dadoQueVeioDoServer) => {
        const isValidImage = dadoQueVeioDoServer
                                .headers
                                .get('Content-Type').includes('jpeg');

        console.log('isValidImage', isValidImage);
        return isValidImage ? null : { urlInvalida: true };
      }),
      catchError((error) => {
        console.log(error);
        return [{ urlInvalida: true }];
      })
    )

    return evento;
  }

  handleCadastraUsuario() {
    if (this.formCadastro.valid) {
      console.log('Manda para o banco de dados');
    } else {
      this.marcarTodosOsCamposComoTocados();
    }
  }

  marcarTodosOsCamposComoTocados() {
    const campos = this.formCadastro.controls;
    Object.keys(campos).forEach(function(controlNameDoCampoAtual) {
      campos[controlNameDoCampoAtual].markAsTouched({onlySelf: true});
    });
  }
}




  // fetch('https://avatars0.githubusercontent.com/u/1asdadss3791385?s=460&v=4').then(function (resposta) {
  //   console.log(resposta)
  // })
  // .catch(function(erro) {
  //     console.log(erro)
  // })


  // #Desafio
    // Criar o Validators.pattern para o telefone!
    // Criar o if com o span la no cadastro.component.html
    // E checar com o | json os erros e os dados que aparecem para fazer
      // mensagens de erro mais felizes

  // Required
  // quantidade de caracteres
  // Tipo especifico só numero/ formatação
    // RegExp
  // CEP
    // Usem esse cara pra vida: https://viacep.com.br/ws/00000000/xml
// https://regex101.com/r/fW1d7H/1
