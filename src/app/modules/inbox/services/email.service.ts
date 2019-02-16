import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class Email {
  assunto: string;
  destinatario: string;
  conteudo: string;
  dataCriacao: string;
  constructor(assunto, destinatario, conteudo, dataCriacao) {
    this.assunto = assunto;
    this.destinatario = destinatario;
    this.conteudo = conteudo;
    this.dataCriacao = dataCriacao.formt;
  }
}

@Injectable()
export class EmailService {
  constructor(private httpClient: HttpClient) {}
  API_URL: string = 'http://localhost:3200/emails';
  DEFAULT_HEADERS: object = {
    headers: { authorization: localStorage.getItem('TOKEN') }
  };

  criarEmail(emailDTO: { to: string, subject: string, content: string }) {
    console.log('Devo criar um email!', emailDTO);
    return this.httpClient.post(this.API_URL, emailDTO, this.DEFAULT_HEADERS);
  }

  pegaTodos() {
    return this.httpClient.get(this.API_URL, this.DEFAULT_HEADERS).pipe(
      map((dadosDoServer: Array<{ subject: string, to: string, content: string, created_at: string }>) => {
        console.log(dadosDoServer);
        return dadosDoServer.map((emailQueVeioDoServer) => {
          return new Email(
            emailQueVeioDoServer.subject,
            emailQueVeioDoServer.to,
            emailQueVeioDoServer.content,
            emailQueVeioDoServer.created_at);
        })
      })
    );
  }
}


