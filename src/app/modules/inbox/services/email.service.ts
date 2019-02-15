import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class EmailService {
  constructor(private httpClient: HttpClient) {}

  criarEmail(emailDTO: { to: string, subject: string, content: string }) {
    console.log('Devo criar um email!', emailDTO);
    return this.httpClient.post('http://localhost:3200/emails', emailDTO, {
      headers: { authorization: localStorage.getItem('TOKEN') }
    })
  }
}
